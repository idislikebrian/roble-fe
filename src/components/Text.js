"use client";
import React from "react";
import styles from './Text.module.css';

const Text = () => {
  const phoneNumber = "+12013947939";
  const message = encodeURIComponent(
    "Hello, I am interested in learning more about your services."
  );
  const smsLink = `sms:${phoneNumber}&body=${message}`;

  return <a href={smsLink} className={styles.link}><button className={styles.text}>Send us a text 💬</button></a>;
};

export default Text;
