"use client";
import { useContext } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import { ThemeContext } from "../context/ThemeContext";

export default function Home() {
  // Use the ThemeContext to access the theme mode
  const { mode } = useContext(ThemeContext); // Access the theme mode

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Nomad by Nature, Coder by Choice: Exploring the World One Line of Code
          at a Time
        </h1>
        <p className={styles.desc}>
          Follow my Adventures - for the ups, the downs and everything
          in-between.
        </p>
        <Button url="/portfolio" text="Start the Adventure" />
        <button className={styles.button}></button>
      </div>
      <div className={styles.item}>
        <Image
          className={styles.logo}
          src={mode === "dark" ? "/logo-light.png" : "/logo-dark.png"}
          width={1000}
          height={500}
          alt="Logo"
        />
      </div>
    </div>
  );
}
