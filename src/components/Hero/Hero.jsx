import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.heroCenter}>

        <div className={styles.nameRow}>
          <h1 className={styles.name}>Sabrina Natasya Bilbina</h1>

          <div className={styles.photoWrap}>
            <div className={styles.photoGlow}></div>
            
            <img
              src={getImageUrl("hero/Picture.png")}
              alt="Sabrina"
              className={styles.avatar}
            />
          </div>
        </div>

        <h2 className={styles.role}>UI / UX Designer</h2>

        <p className={styles.bio}>
          I design thoughtful digital experiences that balance beauty and usability
          blending user psychology, clean interfaces, and meaningful interactions
          to turn ideas into products people genuinely enjoy using.
        </p>

      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
