import "@/app/globals.scss";
import "@/app/variables.scss";
import "@/app/mixins.scss";

import { fetchNews } from "@/lib/api";
import Layout from "@/components/common/Layout";
import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export const dynamicParams = true;

type ImageFormat = {
  url: string;
  width: number;
  height: number;
};

type NewsImageProps = {
  image: {
    alternativeText?: string | null;
    url: string;
    formats?: {
      medium?: ImageFormat;
      [key: string]: ImageFormat | undefined;
    };
  };
};

function NewsImage({ image }: NewsImageProps) {
  const baseUrl = process.env.STRAPI_API_URL;
  const selectedFormat = image.formats?.medium;
  const imageUrl = selectedFormat?.url || image.url;
  const width = selectedFormat?.width || 750;
  const height = selectedFormat?.height || 750;

  return (
    <Image
      src={`${baseUrl}${imageUrl}`}
      alt={image.alternativeText || "Новость"}
      width={width}
      height={height}
      style={{ objectFit: "cover" }}
    />
  );
}

function formatContent(text: string) {
  const paragraphs = text.split(/\n\s*\n/);

  return paragraphs
    .map((paragraph) => {
      const withBreaks = paragraph.replace(/\n/g, "<br/>");
      return `<p>${withBreaks}</p>`;
    })
    .join("");
}

export default async function NewsDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const allNews = await fetchNews();
  const news = allNews?.find((item: any) => item.id.toString() === id);

  if (!news) {
    return (
      <Layout>
        <div className={styles.nav}>
          <Link href="/news" className={styles.button}>
            Новости
          </Link>
          <Link href="/" className={styles.button}>
            На главную
          </Link>
        </div>
        <div className={styles.container}>
          <h1>Новость не найдена</h1>
        </div>
      </Layout>
    );
  }

  const image = news.image?.[0];

  const publishedDate = news.publishedAt;
  const formattedDate = new Date(publishedDate).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.nav}>
          <Link href="/news" className={styles.button}>
            Новости
          </Link>
          <Link href="/" className={styles.button}>
            На главную
          </Link>
        </div>
        <h1>{news.title}</h1>

        <div className={styles.image}>
          {image && <NewsImage image={image} />}
        </div>

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: formatContent(news.content) }}
        />
        <p className={styles.date}>Дата публикации: {formattedDate}</p>
      </div>
    </Layout>
  );
}
