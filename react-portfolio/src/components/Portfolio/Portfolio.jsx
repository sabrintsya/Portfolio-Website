import React from "react";

import styles from "./Portfolio.module.css";

import portfolio from "../../data/portfolio.json";
import { PortfolioCard } from "./PortfolioCard";

export const Portfolio = () => {
  return (
    <section className={styles.container} id="portfolio">
      <h2 className={styles.title}>From Idea to Product</h2>
      <h4 className={styles.description}>For me, every product begins with listening to users, to problems, to possibilities. I take those insights and shape them into wireframes, prototypes, and finally, real experiences. It’s not just about making things look pretty, but about building something people enjoy and find useful.</h4>
      <div className={styles.portfolio}>
        {portfolio.map((portfolio, id) => {
          return <PortfolioCard key={id} portfolio={portfolio} />;
        })}
      </div>
    </section>
  );
};
