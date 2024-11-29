import React from 'react';
import { Card } from 'react-bootstrap';

const ReviewItem = ({ review }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Rating: {review.rating} / 5</Card.Title>
        <Card.Text>{review.review}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReviewItem;
