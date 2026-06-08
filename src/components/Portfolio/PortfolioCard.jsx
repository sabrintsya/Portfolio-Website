import { useNavigate } from "react-router-dom";
import styles from "./PortfolioCard.module.css";
import { getImageUrl } from "../../utils";

const TYPE_LABELS = {
  "case-study": "Case Study",
  github: "Dev Project",
  presentation: "Presentation",
};

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
        <a href={source} className={styles.link} target="_blank" rel="noreferrer">
          Source Code
        </a>
      );
    }

    if (type === "presentation") {
      return (
        <a href={demo} className={styles.link} target="_blank" rel="noreferrer">
          View Presentation
        </a>
      );
    }

    return null;
  };

  return (
    <div className={styles.row}>
      {/* LEFT — text */}
      <div className={styles.left}>
        {/* type badge */}
        {TYPE_LABELS[type] && (
          <div className={styles.typeBadge}>
            <span className={styles.typeDot} />
            {TYPE_LABELS[type]}
          </div>
        )}

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.links}>
          <a href={demo} className={styles.primary} target="_blank" rel="noreferrer">
            <span>Demo</span>
          </a>
          {renderSecondButton()}
        </div>
      </div>

      {/* RIGHT — image */}
      <div className={styles.right}>
        <img src={getImageUrl(imageSrc)} alt={title} className={styles.image} />
      </div>
    </div>
  );
};
