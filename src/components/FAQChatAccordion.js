"use client";

import * as React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "@phosphor-icons/react";
import styles from './FAQChatAccordion.module.css';

export function FaqAccordion({
  data,
  timestamp = "Every day, 9:01 AM",
}) {
  const [openItem, setOpenItem] = React.useState(null);

  return (
    <div className={styles.faqAccordion}>
      {timestamp && (
        <div className={styles.timestamp}>{timestamp}</div>
      )}

      <Accordion.Root
        type="single"
        collapsible
        value={openItem || ""}
        onValueChange={(value) => setOpenItem(value)}
      >
        {data.map((item) => (
          <Accordion.Item 
            value={item.id.toString()} 
            key={item.id} 
            className={styles.accordionItem}
          >
            <Accordion.Header>
              <Accordion.Trigger className={styles.accordionTrigger}>
                <div
                  className={`${styles.accordionQuestion} ${openItem === item.id.toString() ? styles.active : ""}`}
                >
                  {item.icon && (
                    <span
                      className={`${styles.accordionIcon} ${item.iconPosition === "right" ? styles.iconRight : styles.iconLeft}`}
                      style={{
                        transform: item.iconPosition === "right" 
                          ? "rotate(7deg)" 
                          : "rotate(-4deg)",
                      }}
                    >
                      {item.icon}
                    </span>
                  )}
                  <span className={styles.question}>{item.question}</span>
                </div>

                <span className={`${styles.iconToggle} ${openItem === item.id.toString() ? styles.active : ""}`}>
                  {openItem === item.id.toString() ? (
                    <Minus className="icon" />
                  ) : (
                    <Plus className="icon" />
                  )}
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content asChild forceMount>
              <motion.div
                initial="collapsed"
                animate={openItem === item.id.toString() ? "open" : "collapsed"}
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.4 }}
                className={styles.accordionContent}
              >
                <div className={styles.answerContainer}>
                  <div className={styles.answer}>
                    {item.answer}
                  </div>
                </div>
              </motion.div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}