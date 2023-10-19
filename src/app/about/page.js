import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

export const metadata = {
  title: "Angus Carey About ",
  description: "this is a collection of my works",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.unsplash.com/photo-1535262412227-85541e910204?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          alt="bali beach"
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Nomadic Tales</h1>
          <h2 className={styles.imgDesc}>
            From the good, bad and need to know
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>What I am About</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A veniam
            adipisci, vel enim maiores inventore, ratione dignissimos dolor nemo
            facilis nesciunt <br /> consequatur eaque quas suscipit doloribus
            expedita repudiandae soluta deleniti.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What I am About</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A veniam
            adipisci, vel enim maiores inventore, ratione dignissimos dolor nemo
            facilis nesciunt <br /> consequatur eaque quas suscipit doloribus
            expedita repudiandae soluta deleniti.
          </p>

          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
