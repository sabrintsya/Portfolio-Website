import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";


export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title} >Design,with Purpose.</h1>
                <p className={styles.description}> Not just usable.<br />
                    But joyful.<br />
                    Not just beautiful.<br />
                    But meaningful.
                </p>
                <a href="mailto:sabrina.bina.binbin@gmail.com" className={styles.contactBtn}>
                    Get to Know Me
                </a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="hero image sabrintsya" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
            


        </section>
    );
};
