import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        <span>&#169;</span> Angus Carey. All rights reserved.
      </div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="facebook"
        />
        <Image
          src="/2.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="insta"
        />
        <Image
          src="/4.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="youtube"
        />
      </div>
    </div>
  );
};

export default Footer;
