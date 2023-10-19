import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

const Button = ({ text, url }) => {
  return url ? (
    <Link href={url}>
      <div className={styles.container}>{text}</div>
    </Link>
  ) : (
    <div className={styles.container}>{text}</div>
  );
};

export default Button;
