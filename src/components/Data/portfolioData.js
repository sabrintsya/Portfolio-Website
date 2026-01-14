import styles from "../components/CaseStudy/CaseStudy.module.css";
import { getImageUrl } from "../utils";

export const portfolio = [
  // ===============================
  // REQTIFY
  // ===============================
  {
    id: "reqtify",
    title: "Reqtify",
    imageSrc: "portfolio/Spotify.png",
    description:
      "Redesigning Spotify Experience: Optimizing Content Availability through Smart Notifications.",
    demo:
      "https://www.figma.com/board/QMwPmcta4QEIcOhLQMol7V/Spotify-Research---Team-1",
    source:
      "https://www.figma.com/design/CKFhVcvDKB5PxwtMAn3Aea/Team-1---Prototype",

    caseStudyTitle:
      "ReqTify: Optimizing Content Availability on Spotify",
    caseStudySubtitle:
      "A UX Case Study on Reducing Listening Disruption Through Smart Notifications and Alternative Recommendations",

    content: (
      <div className={styles.caseStudyContent}>
        <section className={styles.section}>
          <h2>Problem</h2>
          <p>
            Spotify users often experience songs suddenly becoming unavailable
            due to licensing issues, disrupting listening flow and emotional
            attachment to playlists.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Solution</h2>
          <p>
            Reqtify introduces smart notifications and alternative song
            recommendations whenever a track becomes unavailable.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Result</h2>
          <p>
            100% of test users said they would use Reqtify, with usability scoring
            6.6 out of 7.
          </p>
        </section>
      </div>
    ),
  },

  // ===============================
  // K’PARKIR
  // ===============================
  {
    id: "kparkir",
    title: "K’Parkir",
    imageSrc: "portfolio/K'parkir.png",
    description:
      "A smart parking app designed to reduce time spent searching for parking in Jakarta.",
    demo:
      "https://www.figma.com/design/tgp09Q84VoR5j3PSiz56OG/UI-Design-K%E2%80%99Parkir--TEAM-4FA-?node-id=0-1",
    source:
      "https://www.canva.com/design/DAG2sQv1ZgY/mg5SR5hQ9SBsEZ4eeCfjfg/edit",

    caseStudyTitle: "K’Parkir – Smart Parking for Jakarta",
    caseStudySubtitle:
      "Reducing time, traffic, and illegal parking through real-time availability",

    content: (
      <div className={styles.caseStudyContent}>
        <section className={styles.section}>
          <h2>Problem</h2>
          <p>
            Drivers in Jakarta waste time circling blocks looking for parking,
            increasing congestion and illegal parking.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Solution</h2>
          <p>
            K’Parkir shows real-time parking availability and provides navigation
            to nearby parking spots.
          </p>
        </section>
      </div>
    ),
  },

  // ===============================
  // BEAUTY PRENEUR
  // ===============================
  {
    id: "beauty-preneur",
    title: "Beauty Preneur",
    imageSrc: "portfolio/beautypreneur.png",
    description:
      "A platform that provides makeup training and beauty sessions to help women gain skills and job access.",
    demo: "https://beauty-preneur-official.netlify.app/",
    source:
      "https://medium.com/@sabrinatsya/empowering-underserved-women-through-ux-case-study-of-beautypreneur-8d36b0b564ce",

    caseStudyTitle:
      "Empowering Underserved Women Through UX: BeautyPreneur",
    caseStudySubtitle:
      "Designing an inclusive beauty education platform for Indonesian women",

    content: (
      <div className={styles.caseStudyContent}>
        <section className={styles.section}>
          <h2>Problem</h2>
          <p>
            Many women in rural Indonesia lack access to affordable beauty
            education and job opportunities.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Solution</h2>
          <p>
            BeautyPreneur provides verified trainers, affordable courses, and a
            booking system to connect women with opportunities.
          </p>
        </section>
      </div>
    ),
  },

  // ===============================
  // SIBI
  // ===============================
  {
    id: "sibi",
    title: "SIBI",
    imageSrc: "portfolio/sibi.png",
    description:
      "A mental health companion for Indonesian mothers during pregnancy and postpartum.",
    demo:
      "https://www.figma.com/design/xQs3X179UkOsKJBj0axGhP/Basic-Course---4.2-Landing-Page-Design-Challenge--Sabrina-Natasya-Bilbina-?node-id=2009-1322",
    source:
      "https://medium.com/design-bootcamp/case-study-ux-designing-sibi-a-mental-health-companion-for-indonesian-mothers-5e27043eb9a2",

    caseStudyTitle: "SIBI – Sistem Ibu Bahagia",
    caseStudySubtitle:
      "Supporting Indonesian mothers through pregnancy and postpartum",

    content: (
      <div className={styles.caseStudyContent}>
        <section className={styles.section}>
          <h2>Problem</h2>
          <p>
            Many Indonesian mothers experience anxiety, loneliness, and lack of
            mental health support during pregnancy and after birth.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Solution</h2>
          <p>
            SIBI offers anonymous chat, bonding classes, and access to local
            health resources.
          </p>
        </section>
      </div>
    ),
  },

  // ===============================
  // HERMONEY
  // ===============================
  {
    id: "hermoney",
    title: "Hermoney",
    imageSrc: "portfolio/hermoney.png",
    description:
      "A financial education platform designed for women to learn inclusively and affordably.",
    demo: "https://hermoney.netlify.app/",
    source:
      "https://medium.com/@sabrinatsya/breaking-the-cycle-a-ux-case-study-on-women-poverty-and-financial-education-a0e1b8ef808a",

    caseStudyTitle:
      "Breaking the Cycle: Financial Education for Women",
    caseStudySubtitle:
      "Designing a platform to empower women through accessible financial learning",

    content: (
      <div className={styles.caseStudyContent}>
        <section className={styles.section}>
          <h2>Problem</h2>
          <p>
            Many women lack access to financial education, keeping them trapped
            in cycles of poverty.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Solution</h2>
          <p>
            Hermoney provides inclusive, easy-to-understand financial education
            for women.
          </p>
        </section>
      </div>
    ),
  },
];
