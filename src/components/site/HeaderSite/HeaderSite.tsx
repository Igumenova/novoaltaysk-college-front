import Layout from "../../common/Layout";
import DropDownMenu from "../DropDownMenu";
import styles from "./HeaderSite.module.scss";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <Layout withShadow className={styles.layout} backgroundColor="white">
      <header className={styles.header}>
        <Link href={"/"}>
          <div className={styles.logoContainer}>
            <Image src="/logo.png" width={50} height={50} alt={"logo"}></Image>
            <div className={styles.logoText}>
              Новоалтайский лицей профессионального образования
            </div>
          </div>
        </Link>
        <DropDownMenu />
      </header>
    </Layout>
  );
};

export default Header;
