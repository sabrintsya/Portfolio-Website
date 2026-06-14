import { useState } from "react";
import styles from "./About.module.css";
import { Contact } from "../Contact/Contact";

import img1 from "../../../assets/about/picture1.jpg";
import img2 from "../../../assets/about/picture2.jpg";
import img3 from "../../../assets/about/picture3.JPG";
import img4 from "../../../assets/about/picture4.JPG";

const polaroids = [
  { src: img1, rotate: "-4deg", caption: "the spark" },
  { src: img2, rotate: "3deg",  caption: "the idea"  },
  { src: img3, rotate: "-2deg", caption: "the win"   },
  { src: img4, rotate: "5deg",  caption: "the growth"},
];

const values = [
  {
    icon: "🔍",
    title: "Research & Problem Framing",
    desc: "I dig into the why before the how. Every design decision is rooted in real insight.",
  },
  {
    icon: "🎨",
    title: "Wireframing & Prototyping",
    desc: "From rough sketches to interactive flows, I bring ideas to life fast and intentionally.",
  },
  {
    icon: "🧪",
    title: "Usability Testing",
    desc: "I test, iterate, and measure. Good design should always be measurable and meaningful.",
  },
];

const tags = [
  "Human-Centered",
  "Empathy-Driven",
  "Systems Thinking",
  "K'Parkir · 1st Place 🏆",
  "Data-Informed",
  "Intentional Design",
  "End-to-End Process",
  "Always Iterating",
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <main className={styles.about}>

        {/* ── Deco line ── */}
        <div className={styles.decoLine}>
          <span>UI / UX Designer</span>
        </div>

        {/* ── Heading ── */}
        <h1>
          Hi, I'm a <em>designer</em><br />
          who thinks in humans.
        </h1>
        <span className={styles.subtitleTag}>✦ Portfolio · About Me</span>

        {/* ── Lead quote ── */}
        <p className={styles.lead}>
          I didn't start my journey in design by drawing beautiful screens.
          I started by trying to understand{" "}
          <span style={{ color: "#c44f8a" }}>people</span>.
        </p>

        {/* ── Origin ── */}
        <p className={styles.sectionLabel}>The Origin</p>
        <p>
          From manufacturing floors to digital products, I learned early that
          systems only work when they respect human behavior. That mindset led
          me to UI/UX design — a space where empathy, logic, and creativity
          meet to solve real problems.
        </p>
        <p>
          I believe design is not just about aesthetics, but about{" "}
          <span className={styles.highlightPill}>clarity</span>. Clarity in
          complex systems, clarity in decisions, and clarity in user journeys.
        </p>

        {/* ── Stats ── */}
        <div className={styles.statStrip}>
          <div className={styles.statItem}>
            <div className={styles.statNum}>25%</div>
            <div className={styles.statDesc}>Flow efficiency gained</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>1st</div>
            <div className={styles.statDesc}>National showcase winner</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>∞</div>
            <div className={styles.statDesc}>Problems to solve</div>
          </div>
        </div>

        {/* ── What I Do ── */}
        <p className={styles.sectionLabel}>What I Do</p>
        <ul className={styles.valueList}>
          {values.map((v, i) => (
            <li key={i}>
              <div className={styles.vIcon}>{v.icon}</div>
              <div>
                <strong>{v.title}</strong> — {v.desc}
              </div>
            </li>
          ))}
        </ul>

        {/* ── Quote block ── */}
        <div className={styles.quoteBlock}>
          <p className={styles.quoteText}>
            The moments you see here aren't just snapshots — they represent
            iterations, failures, learnings, and growth. Each one shaping how
            I approach design today.
          </p>
        </div>

        {/* ── Design DNA ── */}
        <p className={styles.sectionLabel}>My Design DNA</p>
        <div className={styles.tagCloud}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>

        {/* ── Closing ── */}
        <p className={styles.closingLine}>
          I design digital experiences that feel{" "}
          <strong>human, intentional, and impactful</strong>. Driven by one
          simple goal: to build products people don't have to think twice
          about using.
        </p>

        {/* ── Polaroids ── */}
        <section
          className={`${styles.polaroidWrapper} ${
            activeIndex !== null ? styles.activeBackground : ""
          }`}
          onClick={() => setActiveIndex(null)}
        >
          <div className={styles.pinkBlurGlobal} />
          <p className={styles.polaroidLabel}>✦ moments that made me ✦</p>

          <div className={styles.polaroidSection}>
            {polaroids.map((item, index) => (
              <div
                key={index}
                className={`${styles.polaroid} ${
                  activeIndex === index ? styles.active : ""
                } ${
                  activeIndex !== null && activeIndex !== index
                    ? styles.dim
                    : ""
                }`}
                style={{ "--rotate": item.rotate }}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(index === activeIndex ? null : index);
                }}
              >
                <img src={item.src} alt={`Moment — ${item.caption}`} />
                <span className={styles.polaroidCaption}>{item.caption}</span>
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
