import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PortfolioCard.module.css";
import { getImageUrl } from "../../utils";

export const PortfolioCard = ({
  portfolio: { id, title, imageSrc, description, demo, source, type },
}) => {
  const navigate = useNavigate();

  const handleViewCaseStudy = () => {
    navigate(`/case-study/${id}`);
  };

  const renderSecondButton = () => {
    if (type === "case-study") {
      return (
        <button onClick={handleViewCaseStudy} className={styles.link}>
          View Case Study
        </button>
      );
    } else if (type === "github") {
      return (
        <a 
          href={source} 
          className={styles.link}
          target="_blank" 
          rel="noopener noreferrer"
        >
          Source Code
        </a>
      );
    }

    return (
      <a 
        href={source} 
        className={styles.link}
        target="_blank" 
        rel="noopener noreferrer"
      >
        View Details
      </a>
    );
  };

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.links}>
        <a 
          href={demo} 
          className={styles.link}
          target="_blank" 
          rel="noopener noreferrer"
        >
          Demo
        </a>
        {renderSecondButton()}
      </div>
    </div>
  );
};