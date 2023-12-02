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
            From the good, bad and the need to know
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>What I am About</h1>
          <p className={styles.desc}>
            I'm all about the thrill of meeting new people and diving headfirst
            into the vibrant tapestry of different cultures and personalities.
            But let me share a bit of my story – I grew up in the heart of
            Botswana, in a town called Maun. Picture this: the incredible
            Okavango Delta was practically in my backyard, and I couldn't have
            asked for a more exhilarating playground. Surf's Up and Nose in a
            Book When I'm not exploring the world, you'll often find me chasing
            waves on my trusty surfboard. Riding the swell of the ocean is my
            idea of pure bliss. The rhythm of the waves and the feel of the
            board beneath my feet is my ultimate happy place. And when it's time
            to dry off, I'm a devoted bookworm. I find solace in the pages of a
            good novel, and there's no adventure quite like diving into the
            world of a well-crafted story. My love for reading is right up there
            with my passion for surfing. Challenge Junkie and Results Wrangler
            Challenges? Bring 'em on!
          </p>
        </div>
        <div className={styles.item}>
          <p className={styles.desc}>
            Growing up in the wild heart of Botswana taught me a thing or two
            about tackling obstacles head-on. Whether it's conquering a monster
            wave or tackling a tricky problem at work, I'm always up for the
            challenge. But here's the fun twist: I'm not just about personal
            success; I get a kick out of helping others overcome their workplace
            hurdles. Sharing knowledge, fostering growth, and building a strong
            team is where I find my groove. In any group, I naturally assume the
            role of a leader, steering us toward success. Strategic Thinker and
            Quick Learner While I'm all about the adventure and fun, I'm also a
            strategic thinker. When life throws curveballs, I love using my
            initiative to find creative solutions. I'm not afraid of the
            unexpected; I see it as a chance to explore uncharted waters. The
            best part? I'm a quick learner. Absorbing and retaining vast amounts
            of information is a skill I'm proud of. So, whether it's mastering a
            new surf technique, diving into a new culture, or finding innovative
            solutions, I'm always ready for the next thrilling challenge. So,
            buckle up and join me on this wild ride as we surf the waves, dive
            into amazing stories, conquer life's challenges together, and relive
            the adventures of my Okavango Delta backyard. Let's ride the
            adventure of a lifetime! 🌊📚🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
