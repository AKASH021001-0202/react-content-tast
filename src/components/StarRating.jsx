import React from "react";

const StarRating = ({ rating }) => {
  // Calculate the number of full stars and half star
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars > 0;

  // Array to hold JSX elements for stars
  const stars = [];

  // Render full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={i} className="fas fa-star checked"></i>);
  }

  // Render half star if applicable
  if (hasHalfStar) {
    stars.push(<i key="half" className="fas fa-star-half-alt checked"></i>);
  }

  // Fill the remaining stars with empty stars
  const remainingStars = 5 - stars.length;
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<i key={`empty${i}`} className="far fa-star"></i>);
  }

  return <div>{stars}</div>;
};

export default StarRating;
