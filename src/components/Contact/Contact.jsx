import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      {/* floating petals */}
      {[...Array(8)].map((_, i) => (
        <div key={i} className={`${styles.petal} ${styles[`p${i + 1}`]}`} />
      ))}

      <div className={styles.grid}>
        {/* LEFT — text */}
        <div className={styles.left}>
          <div className={styles.eyebrow}>
            <span className={styles.dot} />
            Say hello
          </div>
          <h2 className={styles.title}>
            Let&apos;s<br />
            <span>Connect</span>
          </h2>
          <div className={styles.decoBar}>
            <div className={styles.bar1} />
            <div className={styles.bar2} />
            <div className={styles.bar3} />
          </div>
          <p className={styles.sub}>
            Open for collaborations,<br />
            freelance work &amp; sweet conversations ✿
          </p>
        </div>

        {/* RIGHT — links */}
        <ul className={styles.links}>
          <li>
            <a
              className={styles.linkCard}
              href="mailto:Sabrina.bina.binbin@email.com"
            >
              <div className={`${styles.iconWrap} ${styles.iconEmail}`}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
              </div>
              <div className={styles.linkText}>
                <span className={styles.linkLabel}>Email</span>
                <span className={styles.linkValue}>Sabrina.bina.binbin@email.com</span>
              </div>
              <span className={styles.arrow}>→</span>
            </a>
          </li>

          <li>
            <a
              className={styles.linkCard}
              href="https://www.linkedin.com/in/sabrintsya/"
              target="_blank"
              rel="noreferrer"
            >
              <div className={`${styles.iconWrap} ${styles.iconLinkedin}`}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
              </div>
              <div className={styles.linkText}>
                <span className={styles.linkLabel}>LinkedIn</span>
                <span className={styles.linkValue}>linkedin.com/sabrintsya</span>
              </div>
              <span className={styles.arrow}>→</span>
            </a>
          </li>

          <li>
            <a
              className={styles.linkCard}
              href="https://github.com/sabrintsya"
              target="_blank"
              rel="noreferrer"
            >
              <div className={`${styles.iconWrap} ${styles.iconGithub}`}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
              </div>
              <div className={styles.linkText}>
                <span className={styles.linkLabel}>GitHub</span>
                <span className={styles.linkValue}>github.com/sabrintsya</span>
              </div>
              <span className={styles.arrow}>→</span>
            </a>
          </li>

          <li>
            <a
              className={styles.linkCard}
              href="https://medium.com/@sabrinatsya"
              target="_blank"
              rel="noreferrer"
            >
              <div className={`${styles.iconWrap} ${styles.iconMedium}`}>
                <img src={getImageUrl("contact/mediumIcon.png")} alt="Medium icon" />
              </div>
              <div className={styles.linkText}>
                <span className={styles.linkLabel}>Medium</span>
                <span className={styles.linkValue}>medium.com/sabrintsya</span>
              </div>
              <span className={styles.arrow}>→</span>
            </a>
          </li>
        </ul>
      </div>

      {/* footer signature */}
      <div className={styles.footer}>
        <div className={styles.heartDivider}>
          <span className={styles.hline} />
          ✿
          <span className={`${styles.hline} ${styles.hlineR}`} />
        </div>
        Crafted with love by Sabrina Natasya Bilbina
      </div>
    </footer>
  );
};
