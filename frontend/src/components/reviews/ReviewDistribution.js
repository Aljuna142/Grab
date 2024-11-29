/*import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const ReviewDistribution = () => {
  const ratings = [
    { stars: 5, count: 0 },
    { stars: 4, count: 0 },
    { stars: 3, count: 0 },
    { stars: 2, count: 0 },
    { stars: 1, count: 0 },
  ];

  return (
    <div>
      {ratings.map((rating) => (
        <div key={rating.stars} className="d-flex align-items-center">
          <span>{rating.stars}</span>
          <div className="flex-grow-1 mx-2">
            <ProgressBar now={rating.count} max={5} />
          </div>
          <span>{rating.count}</span>
        </div>
      ))}
    </div>
  );
};

export default ReviewDistribution;*/

/*import React from 'react';
import { ProgressBar } from 'react-bootstrap';


const ReviewDistribution = () => {
  const ratings = [
    { stars: 5, count: 0 },
    { stars: 4, count: 0 },
    { stars: 3, count: 0 },
    { stars: 2, count: 0 },
    { stars: 1, count: 0 },
  ];

  return (
    <div className="review-distribution">
      {ratings.map((rating) => (
        <div key={rating.stars} className="d-flex align-items-center rating-row">
          <span>{rating.stars} ★</span>
          <div className="flex-grow-1 mx-2">
            <ProgressBar now={rating.count} max={5} />
          </div>
          <span>{rating.count}</span>
        </div>
      ))}
    </div>
  );
};

export default ReviewDistribution;*/

// src/components/reviews/ReviewDistribution.js
/*import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ReviewDistribution = ({ ratings }) => {
  const totalReviews = ratings.reduce((acc, rating) => acc + rating.count, 0);

  return (
    <div className="review-distribution">
      {ratings.map((rating) => (
        <div key={rating.stars} className="d-flex align-items-center rating-row">
          <span>{rating.stars} ★</span>
          <div className="flex-grow-1 mx-2">
            <ProgressBar
              now={(rating.count / totalReviews) * 100}
              max={100}
              className="progress-bar"
              style={{ backgroundColor: '#e9ac57' }}
            />
          </div>
          <span>{rating.count}</span>
        </div>
      ))}
    </div>
  );
};

ReviewDistribution.propTypes = {
  ratings: PropTypes.arrayOf(
    PropTypes.shape({
      stars: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired
    })
  ).isRequired
};

export default ReviewDistribution;*/



/*progress barimport React from 'react';
import { ProgressBar } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ReviewDistribution = ({ ratings }) => {
  const totalReviews = ratings.reduce((acc, rating) => acc + rating.count, 0);

  return (
    <div className="review-distribution">
      {ratings.map((rating) => {
        const percentage = (rating.count / totalReviews) * 100;
        const fillColor = '#e9ac57'; // Yellow for the filled part
        const emptyColor = '#e0e0e0'; // Gray for the empty part

        return (
          <div key={rating.stars} className="d-flex align-items-center rating-row">
            <span>{rating.stars} ★</span>
            <div className="flex-grow-1 mx-2">
              <div className="progress-bar-container">
                <ProgressBar
                  now={percentage}
                  max={100}
                  className="progress-bar"
                  style={{ backgroundColor: emptyColor, height: '6px' }}
                />
                <ProgressBar
                  now={percentage}
                  max={100}
                  className="progress-bar-filled"
                  style={{ backgroundColor: fillColor, height: '6px', position: 'absolute', top: 0, left: 0 }}
                />
              </div>
            </div>
            <span>{rating.count}</span>
          </div>
        );
      })}
    </div>
  );
};

ReviewDistribution.propTypes = {
  ratings: PropTypes.arrayOf(
    PropTypes.shape({
      stars: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired
    })
  ).isRequired
};

export default ReviewDistribution; progress bar*/


/*import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../../assets/styles/ReviewSection.css'; // Import the CSS file

const ReviewDistribution = ({ ratings }) => {
  const totalReviews = ratings.reduce((acc, rating) => acc + rating.count, 0);

  return (
    <div className="review-distribution">
      {ratings.map((rating) => (
        <div key={rating.stars} className="d-flex align-items-center rating-row">
          <span>{rating.stars} ★</span>
          <div className="flex-grow-1 mx-2">
            <ProgressBar
              now={100}
              max={100}
              className="progress-bar-background"
            >
              <ProgressBar
                now={(rating.count / totalReviews) * 100}
                max={100}
                className="progress-bar-fill"
              />
            </ProgressBar>
          </div>
          <span>{rating.count}</span>
        </div>
      ))}
    </div>
  );
};

ReviewDistribution.propTypes = {
  ratings: PropTypes.arrayOf(
    PropTypes.shape({
      stars: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired
    })
  ).isRequired
};

export default ReviewDistribution;good*/


import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../../assets/styles/ReviewSection.css'; // Import the CSS file

const ReviewDistribution = ({ ratings }) => {
  const totalReviews = ratings.reduce((acc, rating) => acc + rating.count, 0);

  return (
    <div className="review-distribution">
      {ratings.map((rating) => (
        <div key={rating.stars} className="d-flex align-items-center rating-row">
          <span>{rating.stars} ★</span>
          <div className="flex-grow-1 mx-2">
            <ProgressBar
              now={100}
              max={100}
              className="progress-bar-background"
            >
              <ProgressBar
                now={(rating.count / totalReviews) * 100}
                max={100}
                className="progress-bar-fill"
              />
            </ProgressBar>
          </div>
          <span className="review-count">{rating.count}</span>
        </div>
      ))}
    </div>
  );
};

ReviewDistribution.propTypes = {
  ratings: PropTypes.arrayOf(
    PropTypes.shape({
      stars: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired
    })
  ).isRequired
};

export default ReviewDistribution;





