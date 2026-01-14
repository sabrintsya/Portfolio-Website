import React, { useEffect } from "react";
import styles from "./Portfolio.module.css";
import { PortfolioCard } from "./PortfolioCard";
import { Link } from "react-router-dom";

export const Portfolio = ({ showAll = false }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const portfolio = [
     {
      id: "kparkir",
      title: "K’Parkir",
      imageSrc: "portfolio/K'parkir.png",
      description: "A smart parking app designed to reduce time spent searching for parking in Jakarta. K’Parkir integrates real-time availability, navigation, to improve urban mobility and reduce illegal parking.",
      demo: "https://www.figma.com/design/tgp09Q84VoR5j3PSiz56OG/UI-Design-K%E2%80%99Parkir--TEAM-4FA-?node-id=0-1&t=0kYNLicYsYJAGJzN-1",
      source: "https://www.canva.com/design/DAG2sQv1ZgY/mg5SR5hQ9SBsEZ4eeCfjfg/edit?utm_content=DAG2sQv1ZgY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      type: "case-study"
    },
    {
      id: "reqtify",
      title: "Reqtify",
      imageSrc: "portfolio/Spotify.png",
      description: "Redesigning Spotify Experience  : Spotify ReqTify - Optimizing Content Availability on Spotif This project was executed as part of the Startup Campus UI/UX Design 2025 program. ",
      demo: "https://www.figma.com/board/QMwPmcta4QEIcOhLQMol7V/Spotify-Research---Team-1?node-id=0-1&t=9l5QqLpsoWVQurpV-1",
      source: "https://www.figma.com/design/CKFhVcvDKB5PxwtMAn3Aea/Team-1---Prototype?node-id=0-1&t=k9KKeZfPhl5oNao3-1",
      type: "case-study"
    },
    {
     id: "ui-ux-differences",
     title: "Differences Between UI & UX",
     imageSrc: "portfolio/A-1.1 Sabrina Natasya Bilbina.png",
     description: "An analytical presentation exploring the fundamental differences between User Interface and User Experience through real-world product observations, scoring 91/100.",
     demo: "https://www.canva.com/design/DAGugx-Rkg0/1pvKg5o7WFzKJLHIEWBiyA/edit?utm_content=DAGugx-Rkg0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
     type: "presentation"
    },
    {
      id: "beauty-preneur",
      title: "Beauty Preneur",
      imageSrc: "portfolio/beautypreneur.png",
      description: "A platform that provides makeup training and beauty sessions to help women gain skills and access job opportunities. Includes a budgeting tool to find the right price for makeup needs.",
      demo: "https://beauty-preneur-official.netlify.app/",
      source: "https://medium.com/@sabrinatsya/empowering-underserved-women-through-ux-case-study-of-beautypreneur-8d36b0b564ce",
      type: "case-study" 
    },
    {
      id: "sibi",
      title: "SIBI (Sistem Ibu Bahagia)",
      imageSrc: "portfolio/sibi.png",
      description: "A mental health companion for Indonesian mothers during pregnancy and postpartum. Features anonymous chat, bonding classes, and access to local resources.",
      demo: "https://www.figma.com/design/xQs3X179UkOsKJBj0axGhP/Basic-Course---4.2-Landing-Page-Design-Challenge--Sabrina-Natasya-Bilbina-?node-id=2009-1322&t=jCoNeCbhKa2sqkOg-1",
      source: "https://medium.com/design-bootcamp/case-study-ux-designing-sibi-a-mental-health-companion-for-indonesian-mothers-5e27043eb9a2",
      type: "case-study" 
    },
    {
      id: "hermoney",
      title: "Hermoney",
      imageSrc: "portfolio/hermoney.png",
      description: "A financial education platform designed for women to learn inclusively and affordably. Focused on accessibility, empowerment, and breaking financial barriers.",
      demo: "https://hermoney.netlify.app/",
      source: "https://medium.com/@sabrinatsya/breaking-the-cycle-a-ux-case-study-on-women-poverty-and-financial-education-a0e1b8ef808a",
      type: "case-study"
    },
    {
      id: "bmi-calculator",
      title: "BMI Calculator",
      imageSrc: "portfolio/bmi.png",
      description: "A lightweight tool to calculate Body Mass Index (BMI) instantly. It provides clear results with categorized health ranges, for users to understand their wellness levels.",
      demo: "https://bmitor.netlify.app/",
      source: "https://github.com/sabrintsya/BMI-Calculator-Repo",
      type: "github" 
    },
    {
      id: "katik",
      title: "Katik",
      imageSrc: "portfolio/katik.png",
      description: "A web app for accurate geometry calculations. it helps student practice formulas efficiently while improving their understanding of basic math concepts.",
      demo: "https://revou-fundamental-course.github.io/25-dec-23-sabrintsya.github.io/",
      source: "https://github.com/revou-fundamental-course/25-dec-23-sabrintsya.github.io",
      type: "github" 
    },
    {
      id: "furnihaven",
      title: "Furnihaven",
      imageSrc: "portfolio/furnihaven.png",
      description: "A furniture landing page that showcases modern and functional designs. space saving pieces for daily living, while emphasizing comfort.",
      demo: "https://furnihaven.netlify.app/",
      source: "https://github.com/sabrintsya/Furnihaven-Landingpage",
      type: "github" 
    },
    {
      id: "sourcenews",
      title: "SourceNews",
      imageSrc: "portfolio/sourcenews.png",
      description: "A responsive landing page for a digital news platform. Designed to provide quick access to the latest headlines and categorized information.",
      demo: "https://sourcnews.netlify.app/",
      source: "https://github.com/sabrintsya/SourceNews",
      type: "github" 
    },
    {
      id: "bookshelf-app",
      title: "Bookshelf App",
      imageSrc: "portfolio/bookshelf.png",
      description: "A web app to manage personal reading lists efficiently. Users can add, track, and organize books they have read or plan to read.",
      demo: "https://webbookshelf.netlify.app/",
      source: "https://github.com/sabrintsya/bookshelfapp",
      type: "github" 
    }
     
  ];

   const featured = portfolio.slice(0, 3);
  const displayed = showAll ? portfolio : featured;

  return (
    <section className={styles.container}>
      <p className={styles.header}>My Selected Works</p>
      <h2 className={styles.title}>From Idea to Product</h2>
      <h4 className={styles.description}>
        For me, every product begins with listening to users, to problems, to
        possibilities. I take those insights and shape them into wireframes,
        prototypes, and finally, real experiences.
      </h4>

      <div className={styles.list}>
        {displayed.map((item) => (
          <PortfolioCard key={item.id} portfolio={item} />
        ))}
      </div>

      {!showAll && (
        <div className={styles.allWorkWrapper}>
          <Link to="/portfolio" className={styles.allWork}>
            View All Work →
          </Link>
        </div>
      )}
    </section>
  );
};