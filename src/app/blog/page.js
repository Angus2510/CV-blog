import React from "react";
import styles from "./page.module.css";

import Image from "next/image";
import { items } from "./data"; // Import the data object

const Blog = () => {
  const blogs = items.blogs;

  return (
    <div className={styles.mainContainer}>
      {blogs.map((item) => (
        <div
          href={`/blog/${item.id}`}
          className={styles.container}
          key={item.id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
