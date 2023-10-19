import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

export const metadata = {
  title: "Angus Carey Contact Information ",
  description: "this is contact page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's keep in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/table-mountain.jpg"
            alt="table mountain"
            fill={true}
            className={styles.img}
          />
        </div>
        <form action="" className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
