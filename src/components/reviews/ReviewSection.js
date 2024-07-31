/*import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ReviewSummary from './ReviewSummary';
import ReviewDistribution from './ReviewDistribution';
import ReviewForm from './ReviewForm';

const ReviewSection = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <h3>Reviews (0)</h3>
          <ReviewSummary />
          <ReviewDistribution />
          <div className="mt-3">
            <h5>Review this product</h5>
            <p>Share your thoughts with other customers</p>
            <Button variant="dark">Write a review</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewSection;*/

/*llimport React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewSummary from './ReviewSummary';
import ReviewDistribution from './ReviewDistribution';
import ReviewForm from './ReviewForm';
import '../../assets/styles/ReviewSection.css'; // Import the combined CSS file

const ReviewSection = () => {
  return (
    <Container className="review-section mt-5">
      <Row>
        <Col md={6}>
          <h3 className="review-title">Reviews (0)</h3>
          <h5 className="ratings-title">Ratings</h5>
          <div className="review-card">
            <ReviewSummary />
            <ReviewDistribution />
            <div className="review-prompt mt-3">
              <h5>Review this product</h5>
              <p>Share your thoughts with other customers</p>
              <ReviewForm />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewSection;*/


// src/components/reviews/ReviewSection.js
/*import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewSummary from './ReviewSummary';
import ReviewDistribution from './ReviewDistribution';
import ReviewForm from './ReviewForm';
import '../../assets/styles/ReviewSection.css'; // Import the combined CSS file

const ReviewSection = ({ reviews = [] }) => {
  // Calculate average rating
  const totalRatings = reviews.length;
  const averageRating = totalRatings > 0 ? reviews.reduce((acc, review) => acc + review.rating, 0) / totalRatings : 0;

  // Calculate distribution
  const ratings = [5, 4, 3, 2, 1].map(star => ({
    stars: star,
    count: reviews.filter(review => review.rating === star).length
  }));

  return (
    <Container className="review-section mt-5">
      <Row>
        <Col md={6}>
          <h3 className="review-title">Reviews ({totalRatings})</h3>
          <h5 className="ratings-title">Ratings</h5>
          <div className="review-card">
            <ReviewSummary averageRating={averageRating} totalRatings={totalRatings} />
            <ReviewDistribution ratings={ratings} />
            <div className="review-prompt mt-3">
              <h5>Review this product</h5>
              <p>Share your thoughts with other customers</p>
              <ReviewForm />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewSection;*/


/*import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewSummary from './ReviewSummary';
import ReviewDistribution from './ReviewDistribution';
import ReviewForm from './ReviewForm';
import '../../assets/styles/ReviewSection.css'; // Import the combined CSS file

const ReviewSection = ({ initialReviews = [] }) => {
  const [reviews, setReviews] = useState(initialReviews);

  // Calculate average rating
  const totalRatings = reviews.length;
  const averageRating = totalRatings > 0 ? reviews.reduce((acc, review) => acc + review.rating, 0) / totalRatings : 0;

  // Calculate distribution
  const ratings = [5, 4, 3, 2, 1].map(star => ({
    stars: star,
    count: reviews.filter(review => review.rating === star).length
  }));

  const handleReviewSubmit = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <Container className="review-section mt-5">
      <Row>
        <Col md={6}>
          <h3 className="review-title">Reviews ({totalRatings})</h3>
          <h5 className="ratings-title">Ratings</h5>
          <div className="review-card">
            <ReviewSummary averageRating={averageRating} totalRatings={totalRatings} />
            <ReviewDistribution ratings={ratings} />
            <div className="review-prompt mt-3">
              <h5>Review this product</h5>
              <p>Share your thoughts with other customers</p>
              <ReviewForm onSubmit={handleReviewSubmit} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewSection;nnn*/



/* reviews showing import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewSummary from './ReviewSummary';
import ReviewDistribution from './ReviewDistribution';
import ReviewForm from './ReviewForm';
import ReviewItem from './ReviewItem'; // Component to render individual review
import '../../assets/styles/ReviewSection.css'; // Import the combined CSS file

const ReviewSection = ({ initialReviews = [] }) => {
  const [reviews, setReviews] = useState(initialReviews);

  // Calculate average rating
  const totalRatings = reviews.length;
  const averageRating = totalRatings > 0 ? reviews.reduce((acc, review) => acc + review.rating, 0) / totalRatings : 0;

  // Calculate distribution
  const ratings = [5, 4, 3, 2, 1].map(star => ({
    stars: star,
    count: reviews.filter(review => review.rating === star).length
  }));

  const handleReviewSubmit = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <Container className="review-section mt-5">
      <Row>
        <Col md={6}>
          <h3 className="review-title">Reviews ({totalRatings})</h3>
          <h5 className="ratings-title">Ratings</h5>
          <div className="review-card">
            <ReviewSummary averageRating={averageRating} totalRatings={totalRatings} />
            <ReviewDistribution ratings={ratings} />
            <div className="review-prompt mt-3">
              <h5>Review this product</h5>
              <p>Share your thoughts with other customers</p>
              <ReviewForm onSubmit={handleReviewSubmit} />
            </div>
            <div className="review-list mt-4">
              {reviews.length > 0 ? (
                reviews.map((review, index) => (
                  <ReviewItem key={index} review={review} />
                ))
              ) : (
                <p>No reviews yet.</p>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewSection;reviews showing*/




/*import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewSummary from './ReviewSummary';
import ReviewDistribution from './ReviewDistribution';
import ReviewForm from './ReviewForm';
import '../../assets/styles/ReviewSection.css'; // Import the combined CSS file

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]); // Initialize reviews state
  
  // Handle adding a new review
  const handleAddReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  // Calculate average rating
  const totalRatings = reviews.length;
  const averageRating = totalRatings > 0 ? reviews.reduce((acc, review) => acc + review.rating, 0) / totalRatings : 0;

  // Calculate distribution
  const ratings = [5, 4, 3, 2, 1].map(star => ({
    stars: star,
    count: reviews.filter(review => review.rating === star).length
  }));

  return (
    <Container className="review-section mt-5">
      <Row>
        <Col md={6}>
          <h3 className="review-title">Reviews ({totalRatings})</h3>
          <h5 className="ratings-title">Ratings</h5>
          <div className="review-card">
            <ReviewSummary averageRating={averageRating} totalRatings={totalRatings} />
            <ReviewDistribution ratings={ratings} />
            <div className="review-prompt mt-3">
              <h5>Review this product</h5>
              <p>Share your thoughts with other customers</p>
              <ReviewForm onSubmit={handleAddReview} />
            </div>
          </div>
        </Col>
        <Col md={6}>
          <h3 className="reviews-title">User Reviews</h3>
          <div className="user-reviews">
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index} className="review-card">
                  <div className="review-rating">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </div>
                  <p className="review-text">{review.text}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewSection;second col*/


/*import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewSummary from './ReviewSummary';
import ReviewDistribution from './ReviewDistribution';
import ReviewForm from './ReviewForm';
import '../../assets/styles/ReviewSection.css'; // Import the combined CSS file

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]); // Initialize reviews state

  // Handle adding a new review
  const handleAddReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  // Calculate average rating
  const totalRatings = reviews.length;
  const averageRating = totalRatings > 0 ? reviews.reduce((acc, review) => acc + review.rating, 0) / totalRatings : 0;

  // Calculate distribution
  const ratings = [5, 4, 3, 2, 1].map(star => ({
    stars: star,
    count: reviews.filter(review => review.rating === star).length
  }));

  return (
    <Container className="review-section mt-5">
      <Row>
        <Col  md={6}>
          <h3 className="review-title">Reviews ({totalRatings})</h3>
          <h5 className="ratings-title">Ratings</h5>
          <div className="review-card">
            <ReviewSummary averageRating={averageRating} totalRatings={totalRatings} />
            <ReviewDistribution ratings={ratings} />
            <div className="review-prompt mt-3">
              <h5>Review this product</h5>
              <p>Share your thoughts with other customers</p>
              <ReviewForm onSubmit={handleAddReview} />
            </div>
          </div>
        </Col>
        <Col md={6}>
          <h3 className="reviews-title">User Reviews</h3>
          <div className="user-reviews">
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index} className="review-card">
                  <div className="review-rating">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </div>
                  <p className="review-text">{review.text}</p>
                  <p className="review-username"><strong>{review.username}</strong></p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewSection;*/


/*import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewSummary from './ReviewSummary';
import ReviewDistribution from './ReviewDistribution';
import ReviewForm from './ReviewForm';
import '../../assets/styles/ReviewSection.css'; // Import the combined CSS file

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]); // Initialize reviews state

  // Handle adding a new review
  const handleAddReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  // Calculate average rating
  const totalRatings = reviews.length;
  const averageRating = totalRatings > 0 ? reviews.reduce((acc, review) => acc + review.rating, 0) / totalRatings : 0;

  // Calculate distribution
  const ratings = [5, 4, 3, 2, 1].map(star => ({
    stars: star,
    count: reviews.filter(review => review.rating === star).length
  }));

  return (
    <Container className="review-section mt-5">
      <Row>
        <Col md={6}>
          <h3 className="review-title">Reviews ({totalRatings})</h3>
          <h5 className="ratings-title">Ratings</h5>
          <div className="review-card">
            <ReviewSummary averageRating={averageRating} totalRatings={totalRatings} />
            <ReviewDistribution ratings={ratings} />
            <div className="review-prompt mt-3">
              <h5>Review this product</h5>
              <p>Share your thoughts with other customers</p>
              <ReviewForm onSubmit={handleAddReview} />
            </div>
          </div>
        </Col>
        <Col md={6}>
          <h3 className="reviews-title">User Reviews</h3>
          <div className="user-reviews">
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index} className="review-card">
                  <div className="review-header">
                    <img src="/path/to/profile/icon" alt="Profile Icon" className="profile-icon" />
                    <strong className="review-username">{review.username}</strong>
                    <div className="review-rating">
                      {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                    </div>
                  </div>
                  <p className="review-text">{review.text}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewSection;profile icon*/


/*import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewSummary from './ReviewSummary';
import ReviewDistribution from './ReviewDistribution';
import ReviewForm from './ReviewForm';
import '../../assets/styles/ReviewSection.css'; // Import the combined CSS file

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]); // Initialize reviews state

  // Handle adding a new review
  const handleAddReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  // Calculate average rating
  const totalRatings = reviews.length;
  const averageRating = totalRatings > 0 ? reviews.reduce((acc, review) => acc + review.rating, 0) / totalRatings : 0;

  // Calculate distribution
  const ratings = [5, 4, 3, 2, 1].map(star => ({
    stars: star,
    count: reviews.filter(review => review.rating === star).length
  }));

  return (
    <Container className="review-section mt-5">
      <Row>
        <Col md={6}>
          <h3 className="review-title">Reviews ({totalRatings})</h3>
          <h5 className="ratings-title">Ratings</h5>
          <div className="review-card">
            <ReviewSummary averageRating={averageRating} totalRatings={totalRatings} />
            <ReviewDistribution ratings={ratings} />
            <div className="review-prompt mt-3">
              <h5>Review this product</h5>
              <p>Share your thoughts with other customers</p>
              <ReviewForm onSubmit={handleAddReview} />
            </div>
          </div>
        </Col>
        <Col md={6}>
          <h3 className="reviews-title">Reviews</h3>
          <div className="user-reviews">
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index} className="review-card">
                  <div className="review-header">
                    <i className="bi bi-person-circle profile-icon"></i>
                    <strong className="review-username">{review.username}</strong>
                    <div className="review-rating">
                      {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                    </div>
                  </div>
                  <p className="review-text">{review.text}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewSection;*/



/*import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ReviewSummary from './ReviewSummary';
import ReviewDistribution from './ReviewDistribution';
import ReviewForm from './ReviewForm';
import '../../assets/styles/ReviewSection.css'; // Import the combined CSS file

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]); // Initialize reviews state
  const [showAllReviews, setShowAllReviews] = useState(false); // State for toggling review visibility

  // Handle adding a new review
  const handleAddReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  // Calculate average rating
  const totalRatings = reviews.length;
  const averageRating = totalRatings > 0 ? reviews.reduce((acc, review) => acc + review.rating, 0) / totalRatings : 0;

  // Calculate distribution
  const ratings = [5, 4, 3, 2, 1].map(star => ({
    stars: star,
    count: reviews.filter(review => review.rating === star).length
  }));

  // Display only the first 4 reviews if not showing all
  const reviewsToDisplay = showAllReviews ? reviews : reviews.slice(0, 4);

  return (
    <Container className="review-section mt-5">
      <Row>
        <Col md={6}>
          <h3 className="review-title">Reviews ({totalRatings})</h3>
          <h5 className="ratings-title">Ratings</h5>
          <div className="review-card">
            <ReviewSummary averageRating={averageRating} totalRatings={totalRatings} />
            <ReviewDistribution ratings={ratings} />
            <div className="review-prompt mt-3">
              <h5>Review this product</h5>
              <p>Share your thoughts with other customers</p>
              <ReviewForm onSubmit={handleAddReview} />
            </div>
          </div>
        </Col>
        <Col md={6}>
          <h3 className="reviews-title">Reviews</h3>
          <div className="user-reviews">
            {reviewsToDisplay.length > 0 ? (
              reviewsToDisplay.map((review, index) => (
                <div key={index} className="review-card">
                  <div className="review-header">
                    <i className="bi bi-person-circle profile-icon"></i>
                    <strong className="review-username">{review.username}</strong>
                    <div className="review-rating">
                      {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                    </div>
                  </div>
                  <p className="review-text">{review.text}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
            {reviews.length > 4 && (
              <Button
                variant="link"
                className="see-all-reviews-btn"
                onClick={() => setShowAllReviews(!showAllReviews)}
              >
                {showAllReviews ? 'Show Less' : 'See All Reviews'}
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewSection;*/



/*import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ReviewSummary from './ReviewSummary';
import ReviewDistribution from './ReviewDistribution';
import ReviewForm from './ReviewForm';
import '../../assets/styles/ReviewSection.css'; // Import the combined CSS file

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]); // Initialize reviews state
  const [showAllReviews, setShowAllReviews] = useState(false); // State for toggling review visibility

  // Handle adding a new review
  const handleAddReview = (newReview) => {
    setReviews([newReview, ...reviews]); // Add new review to the beginning
  };

  // Calculate average rating
  const totalRatings = reviews.length;
  const averageRating = totalRatings > 0 ? reviews.reduce((acc, review) => acc + review.rating, 0) / totalRatings : 0;

  // Calculate distribution
  const ratings = [5, 4, 3, 2, 1].map(star => ({
    stars: star,
    count: reviews.filter(review => review.rating === star).length
  }));

  // Display only the first 4 reviews if not showing all
  const reviewsToDisplay = showAllReviews ? reviews : reviews.slice(0, 4);

  // Format the review date
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <Container className="review-section mt-5">
      <Row>
        <Col md={6}>
          <h3 className="review-title">Reviews ({totalRatings})</h3>
          <h5 className="ratings-title">Ratings</h5>
          <div className="review-card">
            <ReviewSummary averageRating={averageRating} totalRatings={totalRatings} />
            <ReviewDistribution ratings={ratings} />
            <div className="review-prompt mt-3">
              <h5>Review this product</h5>
              <p>Share your thoughts with other customers</p>
              <ReviewForm onSubmit={handleAddReview} />
            </div>
          </div>
        </Col>
        <Col md={6}>
          <h3 className="reviews-title">Reviews</h3>
          <div className="user-reviews">
            {reviewsToDisplay.length > 0 ? (
              reviewsToDisplay.map((review, index) => (
                <div key={index} className="review-card">
                  <div className="review-header">
                    <i className="bi bi-person-circle profile-icon"></i>
                    <strong className="review-username">{review.username}</strong>
                    <div className="review-rating">
                      {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                    </div>
                  </div>
                  <p className="review-text">{review.text}</p>
                  <p className="review-date">{formatDate(new Date(review.date))}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
            {reviews.length > 4 && (
              <Button
                variant="link"
                className="see-all-reviews-btn"
                onClick={() => setShowAllReviews(!showAllReviews)}
              >
                {showAllReviews ? 'Show Less' : 'See All Reviews'}
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewSection;*/

/*import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ReviewSummary from './ReviewSummary';
import ReviewDistribution from './ReviewDistribution';
import ReviewForm from './ReviewForm';
import '../../assets/styles/ReviewSection.css'; // Import the combined CSS file

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]); // Initialize reviews state
  const [showAllReviews, setShowAllReviews] = useState(false); // State for toggling review visibility

  // Handle adding a new review
  const handleAddReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  // Calculate average rating
  const totalRatings = reviews.length;
  const averageRating = totalRatings > 0 ? reviews.reduce((acc, review) => acc + review.rating, 0) / totalRatings : 0;

  // Calculate distribution
  const ratings = [5, 4, 3, 2, 1].map(star => ({
    stars: star,
    count: reviews.filter(review => review.rating === star).length
  }));

  // Display only the first 4 reviews if not showing all
  const reviewsToDisplay = showAllReviews ? reviews : reviews.slice(0, 4);

  return (
    <Container className="review-section mt-5">
      <Row>
        <Col md={6}>
          <h3 className="review-title">Reviews ({totalRatings})</h3>
          <h5 className="ratings-title">Ratings</h5>
          <div className="review-card">
            <ReviewSummary averageRating={averageRating} totalRatings={totalRatings} />
            <ReviewDistribution ratings={ratings} />
            <div className="review-prompt mt-3">
              <h5>Review this product</h5>
              <p>Share your thoughts with other customers</p>
              <ReviewForm onSubmit={handleAddReview} />
            </div>
          </div>
        </Col>
        <Col md={6} className="pastel-background">
          <h3 className="reviews-title">Reviews</h3>
          <div className="user-reviews">
            {reviewsToDisplay.length > 0 ? (
              reviewsToDisplay
                .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by latest review first
                .map((review, index) => (
                  <div key={index} className="review-card">
                    <div className="review-header">
                      <i className="bi bi-person-circle profile-icon"></i>
                      <strong className="review-username">{review.name}</strong>
                      <div className="review-rating">
                        {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                      </div>
                    </div>
                    <p className="review-text">{review.text}</p>
                    <div className="review-date">
                      {new Date(review.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                ))
            ) : (
              <p>No reviews yet.</p>
            )}
            {reviews.length > 4 && (
              <Button
                variant="dark"
                className="see-all-reviews-btn"
                onClick={() => setShowAllReviews(!showAllReviews)}
              >
                {showAllReviews ? 'Show Less' : 'See All Reviews'}
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewSection;*/

/*import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ReviewSummary from './ReviewSummary';
import ReviewDistribution from './ReviewDistribution';
import ReviewForm from './ReviewForm';
import '../../assets/styles/ReviewSection.css'; // Import the combined CSS file

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]); // Initialize reviews state
  const [showAllReviews, setShowAllReviews] = useState(false); // State for toggling review visibility

  // Handle adding a new review
  const handleAddReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  // Calculate average rating
  const totalRatings = reviews.length;
  const averageRating = totalRatings > 0 ? reviews.reduce((acc, review) => acc + review.rating, 0) / totalRatings : 0;

  // Calculate distribution
  const ratings = [5, 4, 3, 2, 1].map(star => ({
    stars: star,
    count: reviews.filter(review => review.rating === star).length
  }));

  // Display only the first 4 reviews if not showing all
  const reviewsToDisplay = showAllReviews ? reviews : reviews.slice(0, 4);

  return (
    <Container className="review-section white-background mt-5">
      <Row>
        <Col md={6}>
          <div className="review-title-area">
            <h3 className="review-title">Reviews ({totalRatings})</h3>
          </div>
          <h5 className="ratings-title">Ratings</h5>
          <div className="review-card">
            <ReviewSummary averageRating={averageRating} totalRatings={totalRatings} />
            <ReviewDistribution ratings={ratings} />
            <div className="review-prompt mt-3">
              <h5>Review this product</h5>
              <p>Share your thoughts with other customers</p>
              <ReviewForm onSubmit={handleAddReview} />
            </div>
          </div>
        </Col>
        <Col md={6} className="pastel-background">
          <h3 className="reviews-title">Reviews</h3>
          <div className="user-reviews">
            {reviewsToDisplay.length > 0 ? (
              reviewsToDisplay
                .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by latest review first
                .map((review, index) => (
                  <div key={index} className="review-card">
                    <div className="review-header">
                      <i className="bi bi-person-circle profile-icon"></i>
                      <strong className="review-username">{review.name}</strong>
                      <div className="review-rating">
                        {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                      </div>
                    </div>
                    <p className="review-text">{review.text}</p>
                    <div className="review-date">
                      {new Date(review.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                ))
            ) : (
              <p>No reviews yet.</p>
            )}
            {reviews.length > 4 && (
              <Button
                variant="dark"
                className="see-all-reviews-btn"
                onClick={() => setShowAllReviews(!showAllReviews)}
              >
                {showAllReviews ? 'Show Less' : 'See All Reviews'}
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewSection;*/


import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ReviewSummary from './ReviewSummary';
import ReviewDistribution from './ReviewDistribution';
import ReviewForm from './ReviewForm';
import '../../assets/styles/ReviewSection.css'; // Import the combined CSS file

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]); // Initialize reviews state
  const [showAllReviews, setShowAllReviews] = useState(false); // State for toggling review visibility

  // Handle adding a new review
  const handleAddReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  // Calculate average rating
  const totalRatings = reviews.length;
  const averageRating = totalRatings > 0 ? reviews.reduce((acc, review) => acc + review.rating, 0) / totalRatings : 0;

  // Calculate distribution
  const ratings = [5, 4, 3, 2, 1].map(star => ({
    stars: star,
    count: reviews.filter(review => review.rating === star).length
  }));

  // Display only the first 4 reviews if not showing all
  const reviewsToDisplay = showAllReviews ? reviews : reviews.slice(0, 4);

  return (
    <Container className="review-section white-background mt-5">
      <Row>
        <Col md={6}>
          <div className="review-title-area">
            <h3 className="review-title">Reviews ({totalRatings})</h3>
          </div>
          <h5 className="ratings-title">Ratings</h5>
          <div className="review-card">
            <ReviewSummary averageRating={averageRating} totalRatings={totalRatings} />
            <ReviewDistribution ratings={ratings} />
            <div className="review-prompt mt-3">
              <h5>Review this product</h5>
              <p>Share your thoughts with other customers</p>
              <ReviewForm onSubmit={handleAddReview} />
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="review-title-area">
            <h3 className="reviews-title"> Customer Reviews</h3>
          </div>
          <div className="user-reviews">
            {reviewsToDisplay.length > 0 ? (
              reviewsToDisplay
                .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by latest review first
                .map((review, index) => (
                  <div key={index} className="review-card">
                    <div className="review-header">
                      <i className="bi bi-person-circle profile-icon"></i>
                      <strong className="review-username">{review.name}</strong>
                      <div className="review-rating">
                        {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                      </div>
                    </div>
                    <p className="review-text">{review.text}</p>
                    <div className="review-date">
                      {new Date(review.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                ))
            ) : (
              <p>No reviews yet.</p>
            )}
            {reviews.length > 4 && (
              <Button
                variant="dark"
                className="see-all-reviews-btn"
                onClick={() => setShowAllReviews(!showAllReviews)}
              >
                {showAllReviews ? 'Show Less' : 'See All Reviews'}
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewSection;
