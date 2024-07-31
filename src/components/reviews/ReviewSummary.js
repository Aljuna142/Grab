/*import React from 'react';

const ReviewSummary = () => {
  return (
    <div>
      <h1 className="display-4">0.0</h1>
      <p>Rated 0 out of 5</p>
      <p>0 Product Ratings</p>
    </div>
  );
};

export default ReviewSummary;*/


/*import React from 'react';
 

const ReviewSummary = () => {
  return (
    <div className="review-summary">
      <h1 className="display-4 rating-value">0.0</h1>
      <div className="stars">
        <span>☆☆☆☆☆</span>
        <p>0 Product Ratings</p>
      </div>
    </div>
  );
};

export default ReviewSummary;*/


// src/components/reviews/ReviewSummary.js
/*import React from 'react';
import PropTypes from 'prop-types';

const ReviewSummary = ({ averageRating, totalRatings }) => {
  return (
    <div className="review-summary">
      <h1 className="display-4 rating-value">{averageRating.toFixed(1)}</h1>
      <div className="stars">
        <span>☆☆☆☆☆</span>
        <p>{totalRatings} Product Ratings</p>
      </div>
    </div>
  );
};

ReviewSummary.propTypes = {
  averageRating: PropTypes.number.isRequired,
  totalRatings: PropTypes.number.isRequired
};

export default ReviewSummary;*/


import React from 'react';
import PropTypes from 'prop-types';

const ReviewSummary = ({ averageRating, totalRatings }) => {
  // Create an array of 5 elements for stars
  const stars = Array(5).fill(false).map((_, i) => i + 1 <= averageRating);

  return (
    <div className="review-summary">
      <h1 className="display-4 rating-value">{averageRating.toFixed(1)}</h1>
      <div className="stars">
        {stars.map((filled, index) => (
          <span key={index} style={{ color: filled ? 'yellow' : 'gray' }}>★</span>
        ))}
        <p>{totalRatings} Product Ratings</p>
      </div>
    </div>
  );
};

ReviewSummary.propTypes = {
  averageRating: PropTypes.number.isRequired,
  totalRatings: PropTypes.number.isRequired
};

export default ReviewSummary;
