import React from "react";
import styles from "./Footer.module.scss";
import Layout from "../Layout";

const Footer = () => {
  return (
    <Layout backgroundColor="#0a1767">
      <footer className={styles.footer}>
        <div className={styles.left}>
          <h2>Новоалтайский лицей профессионального образования</h2>
          <p>Основан в 1975 году</p>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            <h2>Контакты</h2>
          </div>
          <div className={styles.addres}>
            <div>Алтайский край, г.Новоалтайск, ул.Прудская 9</div>
            <div>nlpo@22edu.ru</div>
          </div>
          <div className={styles.moreInfo}>
            <div className={styles.contactItem}>
              <div className={styles.label}>Приемная:</div>
              <div className={styles.content}>
                <a href="tel:+73853222250">+7 (38532) 2-22-50</a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.label}>
                Учебный отдел по вопросам поступления, обучения:
              </div>
              <div className={styles.content}>
                <a href="tel:83853259613">8(38532) 5-96-13</a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.label}>Социальный педагог:</div>
              <div className={styles.content}>
                <a href="tel:83853259614">8(38532) 5-96-14</a>
              </div>
            </div>
            {/* <div className={styles.contactItem}>
              <strong>Адрес:</strong> г. Новоалтайск, ул. Примерная, д. 1
            </div>
            <div className={styles.contactItem}>
              <strong>Телефон:</strong> +7 (38532) 2-12-34
            </div>
            <div className={styles.contactItem}>
              <strong>Email:</strong> info@nlpo.ru
            </div>
            <div className={styles.contactItem}>
              <strong>Приемная:</strong> +7 (38532) 2-56-78
            </div>
            <div className={styles.contactItem}>
              <strong>Директор:</strong> +7 (38532) 2-90-12
            </div> */}
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default Footer;
