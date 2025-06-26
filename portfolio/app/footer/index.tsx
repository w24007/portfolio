import Link from "next/link";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.item}>
            <Link href="/profile">Profile</Link>
          </li>
          <li className={styles.item}>
            <Link href="/work">Work</Link>
          </li>
          <li className={styles.item}>
            <Link href="/skill">Skill</Link>
          </li>
          <li className={styles.item}>
            <Link href="/strengths">Strengths</Link>
          </li>
        </ul>
      </nav>
      <p className={styles.cr}>© My Portfolio</p>
    </footer>
  );
}
