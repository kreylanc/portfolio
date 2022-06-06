import React from "react";

const PortfolioCard = ({
  link,
  imgsrc,
  isReversed,
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="portfolio-card portfolio-card-1">
      <div className={`card__image ${isReversed ? "is_reversed" : ""}`}>
        <a href={link} target="_blank">
          <img src={imgsrc} alt="image"></img>
        </a>
      </div>
      <div className="card__body">
        <h3>{title}</h3>
        <h5>{subtitle}</h5>
        <p>{description}</p>
        {link ? (
          <a href={link} target="_blank">
            <button className="btn btn__primary">Check Github</button>
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;
