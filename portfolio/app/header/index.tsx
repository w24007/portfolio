"use client";

import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";

export default function Menu() {
  return (
    <div>
      <nav className={styles.navLinks}>
        <Link href="/">
          <Image
            src="/images/life.png"
            alt=""
            width={25}
            height={25}
            className={styles.logo}
            priority
          />
          Top Page
        </Link>

        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/skill">Skill</Link>
          </li>
          <li>
            <Link href="/strengths">Strengths</Link>
          </li>
        </ul>
      </nav>
      <div
        style={{
          position: "fixed",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          zIndex: 1000,
          width: "120px",
        }}
      >
        <a
          href="https://ad.games.dmm.com/angelica_c02/index.html?utm_content=210174&utm_source=GDN&utm_medium=display&utm_campaign=rtg&gclid=EAIaIQobChMIm7_biKj3jQMVi03DBh1xcD27EAEYASAAEgL_jvD_BwE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/ad1.jpg"
            alt="廣告"
            width={600}
            height={400}
            style={{
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          />
        </a>
      </div>
    </div>
  );
}
