import Image from "next/image";
import styles from "./page.module.css";
import Top from "@/components/Top";
import Text from "@/components/Text";
import Slideshow from "@/components/Slideshow";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav></nav>
      <div className={styles.hero}>
        <div className={styles.logo}>
        <Image src="logo-black.svg" width={150} height={150} /></div>
        <h2>Do you want a home that stands out from the rest?</h2>
        <p>
          We specialize in roofing and
          siding services that make your home look the best it can.
        </p>
        <Text />
      </div>
      <div className={styles.services}>
        <h3>Our Services</h3>
        <div className={styles.servList}>
          <div>
            <p>🚛</p>
            <p>Garbage Removal</p>
          </div>
          <div>
            <p>🪜</p>
            <p>Roofing</p>
          </div>
          <div>
            <p>🏠</p>
            <p>Siding</p>
          </div>
        </div>
      </div>
      <div className={styles.projects}>
        <h3>Our Projects</h3>
        <Slideshow />
      </div>
      <div className={styles.contact}>
        <p>
          Contact us today to get started on your roofing and siding project!
        </p>
        <h4>Let&apos;s create progress together.</h4>
        <Text />
      </div>
      <div className={styles.top}>
        <Top />
      </div>
    </main>
  );
}
