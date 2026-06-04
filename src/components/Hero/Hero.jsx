import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        {/* Left Content */}
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Open to new opportunities
          </div>

          <p className={styles.tag}>UI/UX Designer</p>

          <h1 className={styles.name}>
            Hello<br />
            <em className={styles.nameAccent}>I'm Sabrina</em>
          </h1>

          <p className={styles.role}>
            Designing joyful, human-centered experiences
          </p>

          <p className={styles.bio}>
            I blend empathy, creativity, and clean design to craft digital products
            that feel intuitive and maybe even a little magical.
          </p>

          <div className={styles.cta}>
            <Link to="/portfolio" className={styles.ctaPrimary}>
              See My Work
            </Link>

            <a href="#contact" className={styles.ctaSecondary}>
              Let’s chat
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className={styles.right}>
          <div className={styles.photoWrapper}>
            <div className={styles.photoFrame}>
              <img
                src={getImageUrl("hero/Picture.png")}
                alt="Sabrina Natasya - UI UX Designer"
                className={styles.avatar}
              />

              <span className={`${styles.sparkle} ${styles.s1}`}></span>
              <span className={`${styles.sparkle} ${styles.s2}`}></span>
              <span className={`${styles.sparkle} ${styles.s3}`}></span>
              <span className={`${styles.heart} ${styles.h1}`}>💖</span>
              <span className={`${styles.heart} ${styles.h2}`}>💗</span>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>11+</span>
                <span className={styles.statLabel}>Projects Delivered</span>
              </div>

              <div className={styles.stat}>
                <span className={styles.statNum}>2+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>

              <div className={styles.stat}>
                <span className={styles.statNum}>40%</span>
                <span className={styles.statLabel}>Avg. UX Improvement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
