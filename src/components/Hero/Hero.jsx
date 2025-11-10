import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import cvFile from "../../../assets/cv/Sabrina Natasya Bilbina_UI_UX Designer_CV.pdf";

export const Hero = () => {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = cvFile;
        link.download = 'Sabrina Natasya Bilbina_UI_UX Designer_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className={styles.container} id="home">
            <div className={styles.content}>
                <h1 className={styles.title} >Design, with Purpose.</h1>
                <p className={styles.description}> Not just usable.<br />
                    But joyful.<br />
                    Not just beautiful.<br />
                    But meaningful.
                </p>
                <button onClick={handleDownloadCV} className={styles.contactBtn}>
                    Download My CV
                </button>
            </div>
            <img src={getImageUrl("hero/Picture.jpg")} alt="hero image sabrintsya" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};