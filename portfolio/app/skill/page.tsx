import styles from "./page.module.css";
import Image from "next/image";

export default function SkillPage() {
  return (
    <main className={styles.container}>
      <h2 className={styles.heading}>Skill</h2>
      <p className={styles.text}>
        これまで勉強した言語や現在学習中の技術を載せましょう。
        「半分ぐらいしか理解していないけど…」というものでも積極的に書き、学習のモチベーションに変えましょう。
      </p>
      <ul className={styles.skillList}>
        <li>HTML / CSS</li>
        <li>JavaScript (ES6+)</li>
        <li>TypeScript</li>
        <li>React / Next.js</li>
        <li>Node.js / Express（現在学習中）</li>
        {/* 自分の学習中・習得済み技術をリストで追加 */}
        <li>
          <Image
            src="/images/Adobe2.png"
            alt=""
            width={25}
            height={25}
            priority
          />
          Adobe Illustrator
        </li>
        <li>
          <Image
            src="/images/Adobe1.png"
            alt=""
            width={25}
            height={25}
            priority
          />
          Adobe Photoshop
        </li>
      </ul>
    </main>
  );
}
