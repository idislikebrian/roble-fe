import Link from "next/link";
import styles from "./button.module.css";

const THEME_CLASS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
};

export default function Button({
  theme = "PRIMARY",
  href,
  type = "button",
  className = "",
  children,
  ...props
}) {
  const themeClass = THEME_CLASS[theme] || THEME_CLASS.PRIMARY;
  const classes = [styles.button, styles[themeClass], className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={classes} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
