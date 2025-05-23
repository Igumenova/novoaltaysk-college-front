import { ReactNode, CSSProperties } from "react";
import styles from "./Layout.module.scss";

type LayoutProps = {
  children: ReactNode;
  withShadow?: boolean;
  className?: string;
  backgroundColor?: string; // можно также передавать цвет напрямую
};

export default function Layout({
  children,
  withShadow = false,
  className = "",
  backgroundColor,
}: LayoutProps) {
  const combinedClassName = `${styles.outer} ${
    withShadow ? styles.shadow : ""
  } ${className}`;

  const customStyle: CSSProperties = backgroundColor ? { backgroundColor } : {};

  return (
    <div className={combinedClassName} style={customStyle}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
}
