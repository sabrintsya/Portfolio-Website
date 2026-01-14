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
    }

    if (type === "github") {
      return (
        <a href={source} className={styles.link} target="_blank">
          Source Code
        </a>
      );
    }

    if (type === "presentation") {
      return (
        <a href={demo} className={styles.link} target="_blank">
          View Presentation
        </a>
      );
    }

    return null;
  };

  return (
    <div className={styles.row}>
      <div className={styles.left}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.links}>
          <a href={demo} className={styles.primary} target="_blank">
            Demo
          </a>
          {renderSecondButton()}
        </div>
      </div>

      <div className={styles.right}>
        <img src={getImageUrl(imageSrc)} alt={title} className={styles.image} />
      </div>
    </div>
  );
};
