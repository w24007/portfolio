// List 1 - app/page.tsx

import Image from "next/image";
import styles from "./page.module.css";
import About from "./about/page";
import Profile from "./profile/page";
import Work from "./work/page";
import Skill from "./skill/page";
import Strengths from "./strengths/page";

export default function HomePage() {
  return (
    <main className={styles.container}>
      {/* 各セクションへのリンク */}

      {/* メインビジュアル */}
      <section className={styles.hero}>
        <Image
          src="/images/bac.jpg"
          alt="Main Visual"
          width={1200}
          height={600}
          className={styles.heroImage}
        />
        <h1 className={styles.title}>My Portfolio</h1>
      </section>
      <About />
      <Image src="/images/dogerun.gif" alt="" width={200} height={150} />
      <Image
        src="/images/dogerun.gif"
        alt=""
        width={200}
        height={150}
        className={styles.hide3}
      />
      <Image
        src="/images/dogerun.gif"
        alt=""
        width={200}
        height={150}
        className={styles.hide2}
      />
      <Image
        src="/images/dogerun.gif"
        alt=""
        width={200}
        height={150}
        className={styles.hide1}
      />
      <Profile />
      <Image src="/images/dogerun.gif" alt="" width={200} height={150} />
      <Image
        src="/images/dogerun.gif"
        alt=""
        width={200}
        height={150}
        className={styles.hide3}
      />
      <Image
        src="/images/dogerun.gif"
        alt=""
        width={200}
        height={150}
        className={styles.hide2}
      />
      <Image
        src="/images/dogerun.gif"
        alt=""
        width={200}
        height={150}
        className={styles.hide1}
      />
      <Work />
      <Image src="/images/dogerun.gif" alt="" width={200} height={150} />
      <Image
        src="/images/dogerun.gif"
        alt=""
        width={200}
        height={150}
        className={styles.hide3}
      />
      <Image
        src="/images/dogerun.gif"
        alt=""
        width={200}
        height={150}
        className={styles.hide2}
      />
      <Image
        src="/images/dogerun.gif"
        alt=""
        width={200}
        height={150}
        className={styles.hide1}
      />
      <Skill />
      <Image src="/images/dogerun.gif" alt="" width={200} height={150} />
      <Image
        src="/images/dogerun.gif"
        alt=""
        width={200}
        height={150}
        className={styles.hide3}
      />
      <Image
        src="/images/dogerun.gif"
        alt=""
        width={200}
        height={150}
        className={styles.hide2}
      />
      <Image
        src="/images/dogerun.gif"
        alt=""
        width={200}
        height={150}
        className={styles.hide1}
      />
      <Strengths />
    </main>
  );
}
