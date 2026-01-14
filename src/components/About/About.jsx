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
                    I didn’t start my journey in design by drawing beautiful screens.
                    I started by trying to understand people.   </p>
                    <p>From manufacturing floors to digital products, I learned early that systems only work when they respect human behavior. That mindset led me to UI/UX design — a space where empathy, logic, and creativity meet to solve real problems.
                    </p>
                    <p>I believe design is not just about aesthetics, but about clarity.
                        Clarity in complex systems, clarity in decisions, and clarity in user journeys.</p>

                    <p>Through hands-on experience in bootcamps, real projects, and award-winning challenges, I’ve worked across the full design process — from research and problem framing to wireframing, prototyping, and usability testing. Leading projects like K’Parkir, which improved user flow efficiency by 25% and earned 1st place at a national showcase, strengthened my belief that good design should always be measurable and meaningful.

                        The moments you see here aren’t just snapshots.
                        They represent iterations, failures, learnings, and growth — each one shaping how I approach design today.

                        I design digital experiences that feel human, intentional, and impactful.
                        And I’m driven by one simple goal: to build products people don’t have to think twice about using.</p>

                {/* Polaroid */}
                <section
                    className={`${styles.polaroidWrapper} ${activeIndex !== null ? styles.activeBackground : ""
                        }`}
                    onClick={() => setActiveIndex(null)}
                >
                    <div className={styles.pinkBlurGlobal} />

                    <div className={styles.polaroidSection}>
                        {polaroids.map((item, index) => (
                            <div
                                key={index}
                                className={`${styles.polaroid} ${activeIndex === index ? styles.active : ""
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
