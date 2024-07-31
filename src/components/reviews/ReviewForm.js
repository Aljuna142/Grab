/*import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ReviewForm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Write a review
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Write a review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicRating">
              <Form.Label>Rating</Form.Label>
              <Form.Control type="number" min="1" max="5" placeholder="Enter rating" />
            </Form.Group>
            <Form.Group controlId="formBasicReview">
              <Form.Label>Your Review</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ReviewForm;*/

/*import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


const ReviewForm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="write-review-btn">
        Write a review
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Write a review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicRating">
              <Form.Label>Rating</Form.Label>
              <Form.Control type="number" min="1" max="5" placeholder="Enter rating" />
            </Form.Group>
            <Form.Group controlId="formBasicReview">
              <Form.Label>Your Review</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ReviewForm;*/


/*revies showing import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ReviewForm = ({ onSubmit }) => {
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (rating && review) {
      const newReview = { rating: parseInt(rating), review };
      onSubmit(newReview);
      setRating('');
      setReview('');
      handleClose();
    }
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="write-review-btn">
        Write a review
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Write a review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicRating">
              <Form.Label>Rating</Form.Label>
              <Form.Control 
                type="number" 
                min="1" 
                max="5" 
                placeholder="Enter rating" 
                value={rating}
                onChange={(e) => setRating(e.target.value)} 
              />
            </Form.Group>
            <Form.Group controlId="formBasicReview">
              <Form.Label>Your Review</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                value={review}
                onChange={(e) => setReview(e.target.value)} 
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ReviewForm;*/


/*import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ReviewForm = ({ onSubmit }) => {
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(1);
  const [reviewText, setReviewText] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { rating, text: reviewText };
    onSubmit(newReview);
    handleClose();
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="write-review-btn">
        Write a review
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Write a review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicRating">
              <Form.Label>Rating</Form.Label>
              <Form.Control 
                type="number" 
                min="1" 
                max="5" 
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                placeholder="Enter rating" 
              />
            </Form.Group>
            <Form.Group controlId="formBasicReview">
              <Form.Label>Your Review</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3}
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ReviewForm;sec col*/


/*pakkaimport React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ReviewForm = ({ onSubmit }) => {
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(1);
  const [reviewText, setReviewText] = useState('');
  
  // Generate a placeholder username
  const placeholderUsername = 'User' + (Math.floor(Math.random() * 1000) + 1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { rating, text: reviewText, username: placeholderUsername };
    onSubmit(newReview);
    handleClose();
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="write-review-btn">
        Write a review
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Write a review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicRating">
              <Form.Label>Rating</Form.Label>
              <Form.Control 
                type="number" 
                min="1" 
                max="5" 
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                placeholder="Enter rating" 
              />
            </Form.Group>
            <Form.Group controlId="formBasicReview">
              <Form.Label>Your Review</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3}
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ReviewForm;*/



/*import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../../assets/styles/ReviewSection.css'; // Import the combined CSS file

const ReviewForm = ({ onSubmit }) => {
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(1);
  const [reviewText, setReviewText] = useState('');
  
  // Generate a placeholder username
  const placeholderUsername = 'User' + (Math.floor(Math.random() * 1000) + 1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { rating, text: reviewText, username: placeholderUsername };
    onSubmit(newReview);
    handleClose();
  };

  const handleStarClick = (ratingValue) => {
    setRating(ratingValue);
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="write-review-btn">
        Write a review
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Write a review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicRating">
              <Form.Label>Rating</Form.Label>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i
                    key={star}
                    className={`bi bi-star${star <= rating ? '-fill' : ''}`}
                    onClick={() => handleStarClick(star)}
                    style={{ fontSize: '2rem', cursor: 'pointer', color: star <= rating ? 'yellow' : 'gray' }}
                  ></i>
                ))}
              </div>
            </Form.Group>
            <Form.Group controlId="formBasicReview">
              <Form.Label>Your Review</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3}
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ReviewForm;pakka*/


/*name import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../../assets/styles/ReviewSection.css'; // Import the combined CSS file

const ReviewForm = ({ onSubmit }) => {
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(1);
  const [reviewText, setReviewText] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const placeholderUsername = 'User' + (Math.floor(Math.random() * 1000) + 1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { rating, text: reviewText, username: placeholderUsername, name, email };
    onSubmit(newReview);
    handleClose();
  };

  const handleStarClick = (ratingValue) => {
    setRating(ratingValue);
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="write-review-btn">
        Write a review
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Write a review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicRating">
              <Form.Label>Rating</Form.Label>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i
                    key={star}
                    className={`bi bi-star${star <= rating ? '-fill' : ''}`}
                    onClick={() => handleStarClick(star)}
                    style={{ fontSize: '2rem', cursor: 'pointer', color: star <= rating ? '#e9ac57' : 'gray' }}
                  ></i>
                ))}
              </div>
            </Form.Group>
            <Form.Group controlId="formBasicReview">
              <Form.Label>Your Review</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3}
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="form-group-inline">
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
            </Form.Group>
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ReviewForm;*/

import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../../assets/styles/ReviewSection.css'; // Import the combined CSS file

const ReviewForm = ({ onSubmit }) => {
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(1);
  const [reviewText, setReviewText] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { 
      rating, 
      text: reviewText, 
      name,
      email,
      date: new Date() // Add current date
    };
    onSubmit(newReview);
    handleClose();
  };

  const handleStarClick = (ratingValue) => {
    setRating(ratingValue);
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="write-review-btn">
        Write a review
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Write a review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicRating">
              <Form.Label>Rating</Form.Label>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i
                    key={star}
                    className={`bi bi-star${star <= rating ? '-fill' : ''}`}
                    onClick={() => handleStarClick(star)}
                    style={{ fontSize: '2rem', cursor: 'pointer', color: star <= rating ? '#e9ac57' : 'gray' }}
                  ></i>
                ))}
              </div>
            </Form.Group>
            <Form.Group controlId="formBasicReview">
              <Form.Label>Your Review</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3}
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="form-group-inline">
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
            </Form.Group>
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ReviewForm;
