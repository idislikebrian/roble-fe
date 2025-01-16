"use client";
import React from "react";
import styles from './Text.module.css';

const Text = () => {
  const phoneNumber = "+12013947939";
  const message = encodeURIComponent(
    "Hello, I am interested in learning more about your services."
  );
  const smsLink = `sms:${phoneNumber}&body=${message}`;

  return <div className={styles.root}><a href={smsLink} className={styles.link}><button className={styles.text}>Text Us 💬</button></a></div>;
};

export default Text;
