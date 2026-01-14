import { useState } from "react";
import styles from "./About.module.css";
import { Contact } from "../Contact/Contact";

import img1 from "../../../assets/about/polaroid-1.png";
import img2 from "../../../assets/about/polaroid-2.png";
import img3 from "../../../assets/about/polaroid-3.png";
import img4 from "../../../assets/about/polaroid-4.png";

const polaroids = [
  { src: img1, rotate: "-4deg" },
  { src: img2, rotate: "3deg" },
  { src: img3, rotate: "-2deg" },
  { src: img4, rotate: "5deg" },
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <main className={styles.about}>
        <h1>About</h1>

        <p className={styles.lead}>
          I believe design is the most powerful tool we have to change the world.
        </p>

        <p>
          It can clarify complexity, realign incentives, and make difficult
          things easy.
        </p>

        <p>
          That’s why I focus on UI/UX design — creating digital experiences that
          feel human, simple, and meaningful.
        </p>

        {/* Polaroid */}
        <section
          className={`${styles.polaroidWrapper} ${
            activeIndex !== null ? styles.activeBackground : ""
          }`}
          onClick={() => setActiveIndex(null)}
        >
          <div className={styles.pinkBlurGlobal} />

          <div className={styles.polaroidSection}>
            {polaroids.map((item, index) => (
              <div
                key={index}
                className={`${styles.polaroid} ${
                  activeIndex === index ? styles.active : ""
                } ${activeIndex !== null && activeIndex !== index ? styles.dim : ""}`}
                style={{ "--rotate": item.rotate }}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(index);
                }}
              >
                <img src={item.src} alt="Polaroid moment" />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Contact />
    </>
  );
};


export default About;
