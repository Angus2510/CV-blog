"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { items } from "../data";

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query || {}; // Provide a default empty object for router.query

  // Check if id is defined and is a number
  if (id === undefined || isNaN(Number(id))) {
    return <div>Blog post not found.</div>;
  }

  // Find the specific blog post by id
  const blogPost = items.blogs.find((item) => item.id === id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{blogPost.title}</h1>
          <p className={styles.desc}>{blogPost.desc}</p>
          <div className={styles.author}>
            <Image src={blogPost.img} alt="" width={40} height={40} />
            <span className={styles.username}>{blogPost.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={blogPost.img}
            alt=""
            layout="fill"
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{blogPost.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
