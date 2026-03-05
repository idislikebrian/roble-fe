import React from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";
import Button from "./ui/button";

const Navigation = () => {
  return (
    <nav className={styles.navContainer}>
      
      <div className={styles.left}>
        <a href="tel:2013947939">(201) 394-7939</a>
      </div>

      <div className={styles.logo}>
        <Link href="/">
          <h1>G&G</h1>
        </Link>
      </div>

      <div className={styles.right}>
        <Button
          className={styles.heroActionButton}
          theme="PRIMARY"
          href="/estimate"
        >
          Get a Free Estimate
        </Button>
      </div>

    </nav>
  );
};

export default Navigation;