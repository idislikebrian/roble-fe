import { useEffect } from "react"
import { gsap } from "gsap"
import styles from './BounceCards.module.css'

/**
 * A component that displays a group of cards with a bouncing animation effect.
 * Uses GSAP for smooth animations and supports custom positioning and timing.
 */
export function BounceCards({
  className = "",
  images = [],
  containerWidth = 800,
  containerHeight = 375,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = "elastic.out(1, 0.8)",
  transformStyles = [
    "rotate(10deg) translate(-170px)",
    "rotate(5deg) translate(-85px)",
    "rotate(-3deg)",
    "rotate(-10deg) translate(85px)",
    "rotate(2deg) translate(170px)"
  ]
}) {
  useEffect(() => {
    gsap.fromTo(
      "." + styles.card,
      { scale: 0 },
      {
        scale: 1,
        stagger: animationStagger,
        ease: easeType,
        delay: animationDelay
      }
    )
  }, [animationStagger, easeType, animationDelay])

  return (
    <div
      className={styles.container}
      style={{
        height: containerHeight
      }}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className={styles.card}
          style={{
            transform: transformStyles[idx] !== undefined ? transformStyles[idx] : "none"
          }}
        >
          <img
            className={styles.image}
            src={src}
            alt={`card-${idx}`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}