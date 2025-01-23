import React from "react";
import styles from "./Footer.module.css"; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerColumn}>
        <p>Request an Estimate</p>
      </div>
      <div className={styles.footerColumn}>
        <p>
          📞{" "}
          <a href="tel:2013947939">
            201 394 7939
            </a>
        </p>
        <p>
          📧{" "}
          <a href="mailto:robleroofnsiding@gmail.com">
            robleroofnsiding@gmail.com
          </a>
        </p>
      </div>
      <div className={styles.footerColumn}>
        <p>Se habla español</p>
      </div>
    </footer>
  );
};

export default Footer;
