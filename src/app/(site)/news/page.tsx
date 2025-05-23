// app/news/page.tsx
import "@/app/globals.scss";
import "@/app/variables.scss";
import "@/app/mixins.scss";

import NewsCard from "@/components/site/NewsCard";
import { fetchNews } from "@/lib/api";
import Layout from "@/components/common/Layout";
import styles from "./page.module.scss";

export default async function NewsPage() {
  const news = await fetchNews();

  return (
    <Layout>
      <div className={styles.mainBlock}>
        <h1>Новости</h1>
        <div className={styles.newsBlock}>
          {news
            .slice()
            .reverse()
            .map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
        </div>
      </div>
    </Layout>
  );
}
