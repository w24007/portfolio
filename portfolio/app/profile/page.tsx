import Image from "next/image";
import styles from "./page.module.css";

export default function ProfilePage() {
  return (
    <main className={styles.container}>
      <h2 className={styles.heading}>Profile</h2>
      <section className={styles.profileSection}>
        <Image
          src="/images/doge.jpg"
          alt="My Profile"
          width={200}
          height={200}
          className={styles.profileImage}
        />
        <div className={styles.profileText}>
          <p>
            <strong>名前：</strong>CHIANG CHUN YI
          </p>
          <p>
            <strong>年齢：</strong>20歳
          </p>
          <p>
            専門学校沖縄ビジネス外語学院 Web
            プログラミングコースを専攻し、現在はエンジニアを目指して勉強中。
          </p>
        </div>
      </section>

      <section className={styles.hobbySection}>
        <h3 className={styles.subHeading}>趣味</h3>
        <div className={styles.hobbyList}>
          <article className={styles.hobbyItem}>
            <Image
              src="/images/pic1.jpg"
              alt="味趣1"
              width={150}
              height={150}
              className={styles.hobbyImage}
            />
            <p className={styles.hobbyText}>楽器</p>
          </article>
          <article className={styles.hobbyItem}>
            <Image
              src="/images/pic2.jpg"
              alt="趣味2"
              width={150}
              height={150}
              className={styles.hobbyImage}
            />
            <p className={styles.hobbyText}>落書き</p>
          </article>
          {/* 必要に応じてカードを追加 */}
        </div>
      </section>
    </main>
  );
}
