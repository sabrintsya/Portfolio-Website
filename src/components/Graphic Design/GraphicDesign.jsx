import React, { useState, useRef } from "react";
import { getImageUrl } from "../../utils";
import styles from "./GraphicDesign.module.css";

const WORKS = [
  { img: "grapicDesign/work1.png", label: "Instagram Carousel" },
  { img: "grapicDesign/work2.png", label: "Brand Identity" },
  { img: "grapicDesign/work3.png", label: "Feed Aesthetic" },
  { img: "grapicDesign/work4.png", label: "Infographic" },
  { img: "grapicDesign/work5.png", label: "Story Template" },
  { img: "grapicDesign/work6.png", label: "Konten Edukasi" },
  { img: "grapicDesign/work7.png", label: "Promosi & Event" },
  { img: "grapicDesign/work8.png", label: "Reels Cover" },
];

const VISIBLE = 3;
const CARD_W = 260 + 16;

export const GraphicDesign = () => {
  const [current, setCurrent] = useState(0);
  const maxSlide = WORKS.length - VISIBLE;
  const touchStartX = useRef(0);

  const goTo = (idx) => {
    setCurrent(Math.max(0, Math.min(idx, maxSlide)));
  };

  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.left}>
          <p className={styles.tag}>Creative Work</p>

          <h2 className={styles.title}>
            Graphic Design{" "}
            <em className={styles.accent}>Portfolio</em>
          </h2>

          <p className={styles.sub}>
            Carousel designs &amp; social media content I’ve worked on. 
          </p>
        </div>

        <div className={styles.right}>
          <a
            href="https://mez.ink/zofjabarkrw"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
          >
            📲 View All Works →
          </a>

          <div className={styles.navBtns}>
            <button
              className={styles.navBtn}
              onClick={() => goTo(current - 1)}
              disabled={current === 0}
              aria-label="Previous"
            >
              ‹
            </button>

            <button
              className={styles.navBtn}
              onClick={() => goTo(current + 1)}
              disabled={current === maxSlide}
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className={styles.carouselWrap}>
        <div
          className={styles.track}
          style={{
            transform: `translateX(-${current * CARD_W}px)`,
          }}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const diff =
              touchStartX.current - e.changedTouches[0].clientX;

            if (Math.abs(diff) > 40) {
              goTo(diff > 0 ? current + 1 : current - 1);
            }
          }}
        >
          {WORKS.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imgWrap}>
                <img
                  src={getImageUrl(item.img)}
                  alt={item.label}
                  className={styles.img}
                />

                <div className={styles.overlay}>
                  <span className={styles.overlayLabel}>
                    {item.label}
                  </span>
                </div>
              </div>

              <p className={styles.cardLabel}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className={styles.dots}>
        {Array.from({ length: maxSlide + 1 }).map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${
              i === current ? styles.dotActive : ""
            }`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};