"use client";
import React from "react";

const Text = () => {
  const phoneNumber = "+12013947939";
  const message = encodeURIComponent(
    "Hello, I am interested in learning more about your services."
  );
  const smsLink = `sms:${phoneNumber}&body=${message}`;

  return <a href={smsLink}>Send us a text 💬</a>;
};

export default Text;
