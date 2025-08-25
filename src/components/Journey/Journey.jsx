import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Journey.module.css";


export const Journey = () => {
    return (
        <section className={styles.container} id="journey">
            <h2 className={styles.title}>How I Got Here</h2>
            <div className={styles.content}>
                <img src={getImageUrl("journey/journeyImage.png")} alt="Journey photo" 
                className={styles.journeyImage}/>
                <ul className={styles.journeyItems}>
                    <li className={styles.journeyItem}>
                        <div className={styles.journeyItemText}>
                            <h4>
                                I didn’t start with pixels, I started with circuits. <br />

                                At vocational school, I explored how things work beneath the surface.That curiosity led me to design , first through typography, then user experience. <br/>
                                <br/>
                                In Technopark, I found UI/UX, a perfect blend of logic and empathy. Since then, I’ve grown through bootcamps, real projects, and national programs.<br/>

                                Now, I design with purpose: <br/>
                                to solve problems, spark joy, and keep learning.

                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
