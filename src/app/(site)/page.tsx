import React from "react";
import "../globals.scss";
import "../variables.scss";
import "../mixins.scss";
import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/common/Layout";
import { FiArrowRight } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi";
import { fetchNews } from "@/lib/api";
import NewsCard from "@/components/site/NewsCard";

const Home = async () => {
  const news = await fetchNews();

  return (
    <div className={styles.homePage}>
      <div className={styles.firstSection}>
        <div className={styles.gradientBlock}></div>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.header}>
              <h2>КГБПОУ</h2>
              <h1>
                Новоалтайский лицей
                <br />
                профессионального образования
              </h1>
            </div>

            <p>Образован 1 октября 1975 года</p>

            <Link href="/some-page" className={styles.link}>
              Узнать больше
            </Link>
          </div>

          <div className={styles.image}>
            <Image
              src="https://s16.stc.yc.kpcdn.net/share/i/12/13814551/de-1200.jpg"
              alt="Описание изображения"
              fill
              style={{ objectFit: "cover" }}
              placeholder="empty"
            />
          </div>
        </div>

        <div className={styles.partnersBlock}>
          <Layout>
            <div className={styles.wrapperPartners}>
              <h1>Наши партнеры</h1>
              <div className={styles.partners}>
                <div className={styles.partnersItem}>
                  <Link
                    href="https://www.rzd.ru/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://play-lh.googleusercontent.com/Z1ORF9GP1zBDpPqtcY7ccCiqgavio8V5dOsbSWi-7FyTU_MOP6niKd8yPe--On8XOWE"
                      alt="Описание изображения"
                      fill
                      style={{ objectFit: "cover" }}
                      placeholder="empty"
                    />
                  </Link>
                </div>
                <div className={styles.partnersItem}>
                  <Link
                    href="https://barnaul-gi.ru/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3uh2jrfjDKeFK2jXS6nij-Qt5SZkT433Sbg&s"
                      alt="Описание изображения"
                      fill
                      style={{ objectFit: "cover" }}
                      placeholder="empty"
                    />
                  </Link>
                </div>
                <div className={styles.partnersItem}>
                  <Link
                    href="https://isk-soyuz.ru/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCEwfFw9HaLVjQPUk6rjLVRsnJNnCa80cUA&s"
                      alt="Описание изображения"
                      fill
                      style={{ objectFit: "cover" }}
                      placeholder="empty"
                    />
                  </Link>
                </div>
                <div className={styles.partnersItem}>
                  <Link
                    href="https://xn--b1aeygabza2h.xn--p1ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA8wwBwXJLWLwm5hJnL90MYt0G9Bkxm6dLfw&s"
                      alt="Описание изображения"
                      fill
                      style={{ objectFit: "cover" }}
                      placeholder="empty"
                    />
                  </Link>
                </div>
                <div className={styles.partnersItem}>
                  <Link
                    href="https://ombudsmanbiz22.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://ombudsmanbiz22.ru/images/news/pic/202004/837_1.jpeg"
                      alt="Описание изображения"
                      fill
                      style={{ objectFit: "cover" }}
                      placeholder="empty"
                    />
                  </Link>
                </div>
                <div className={styles.partnersItem}>
                  <Link
                    href="https://www.maria-ra.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://www.maria-ra.ru/local/templates/main/design/build/img/512.png"
                      alt="Описание изображения"
                      fill
                      style={{ objectFit: "cover" }}
                      placeholder="empty"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </Layout>
        </div>
      </div>
      <Layout className={styles.layout}>
        <div className={styles.informationBlock}>
          <div className={`${styles.infoBlock} ${styles.color}`}>
            <div className={styles.title}>Бюджет</div>
            <div>Прием на обучение на 2024 - 2025 учебный год</div>
            <Link href="/budget-info" className={styles.button}>
              <FiArrowRight size={18} />
            </Link>
          </div>
          <div className={styles.infoBlock}>
            <div className={styles.title}>Внебюджет</div>
            <div>Прием на обучение на 2024 - 2025 учебный год</div>
            <Link href="/budget-info" className={styles.button}>
              <FiArrowRight size={18} />
            </Link>
          </div>
          <div className={styles.infoBlock}>
            <div className={styles.title}>Первокурсникам</div>
            <div>Даты заселения в общежитие</div>
            <Link href="/budget-info" className={styles.button}>
              <FiArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Layout>
      <Layout>
        <div className={styles.newsBlock}>
          <h1>Новости</h1>
          <div className={styles.content}>
            {news
              .slice(-3)
              .reverse()
              .map((item) => (
                <NewsCard key={item.id} news={item} />
              ))}
          </div>

          <Link href="/news" className={styles.buttonNews}>
            Все новости <HiArrowRight size={18} />
          </Link>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
