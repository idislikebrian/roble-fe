import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="logo-black.svg"
            width={150}
            height={150}
            priority={"blur"}
            alt="Roble logo. The word roble in a box with a roof draw over the box."
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation; 