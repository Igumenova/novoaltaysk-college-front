// components/NewsCard.tsx
import Link from "next/link";
import Image from "next/image";
import styles from "./NewsCard.module.scss";
import { NewsItem } from "../../../types/news";

interface Props {
  news: NewsItem;
}

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
      width={360}
      height={220}
      style={{ objectFit: "cover" }}
    />
  );
}

export default function NewsCard({ news }: Props) {
  return (
    <Link href={`/news/${news.id}`}>
      <div className={styles.newsCard}>
        <div className={styles.image}>
          {news.image?.[0] && <NewsImage image={news.image[0]} />}
        </div>
        <div className={styles.textContent}>
          <div className={styles.title}>{news.title}</div>
          {/* можно добавить краткое описание, если появится preview */}
          <div className={styles.text}>{news.content.slice(0, 30)}...</div>
        </div>
      </div>
    </Link>
  );
}
