import React from "react";
import "./newsCard.css";

const NewsCard = ({ headline, image, article, source, publicationDate }) => {
  return (
    <div className="news-card">
      {image ? (
        <img src={image} alt={headline} className="news-image" />
      ) : (
        <img src="/dummy.jpg" alt={headline} className="news-image" />
      )}
      <h3 className="news-headline">{headline}</h3>
      <p className="news-article">{article}</p>
      <a href="#" className="view-more">
        View More
      </a>
      <div className="news-footer">
        <span className="news-source"><span>Source: </span>{source}</span>
        <span className="publication-date"><span>Published At: </span>{publicationDate}</span>
      </div>
    </div>
  );
};

export default NewsCard;
