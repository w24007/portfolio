"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function WorkPage() {
  useEffect(() => {
    // 動態載入 Ruffle
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@ruffle-rs/ruffle";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main className={styles.container}>
      <h2 className={styles.heading}>Work</h2>
      <p className={styles.text}>
        ここでは自分がこれまで制作してきたアプリやサイトを紹介します。各作品のサムネイルや簡単な説明文、GitHub
        リンクを載せましょう。
      </p>
      <ul className={styles.workList}>
        <li className={styles.workItem}>
          <h3>作品名 1</h3>
          <p>Next.js を使ったポートフォリオサイト</p>
          <Link
            href="https://github.com/username/project1"
            className={styles.link}
          >
            GitHub リポジトリはこちら
          </Link>
        </li>
        <li className={styles.workItem}>
          <h3>作品名 2</h3>
          <p>React + Firebase で作った TODO アプリ</p>
          <Link
            href="https://github.com/username/project2"
            className={styles.link}
          >
            GitHub リポジトリはこちら
          </Link>
        </li>
        {/* 必要に応じてリストを追加 */}
      </ul>
      <div className="flex flex-col items-center p-4">
        <h1 className="text-2xl font-bold mb-4">作品(ゲーム)</h1>
        <div className="ruffle-player">
          <embed src="/game.swf" width="600" height="400" />
        </div>
      </div>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1>作品(絵本アニメーション)</h1>
        <video controls width="50%">
          <source src="/vid1.mp4" type="video/mp4" />
          您的瀏覽器不支援影片播放。
        </video>
        <video controls width="50%">
          <source src="/vid2.mp4" type="video/mp4" />
          您的瀏覽器不支援影片播放。
        </video>
        <video controls width="50%">
          <source src="/vid3.mp4" type="video/mp4" />
          您的瀏覽器不支援影片播放。
        </video>
        <video controls width="50%">
          <source src="/vid4.mp4" type="video/mp4" />
          您的瀏覽器不支援影片播放。
        </video>
      </div>
    </main>
  );
}
