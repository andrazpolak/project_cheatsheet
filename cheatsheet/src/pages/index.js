import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>Get started by editing</p>
        </div>

        <ul className={styles.grid}>
          <li>
            <Link href="/regex">Regex</Link>
          </li>
          <li>
            <Link href="/python">Python</Link>
          </li>
        </ul>
      </main>
    </>
  );
}
