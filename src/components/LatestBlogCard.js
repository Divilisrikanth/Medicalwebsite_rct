// src/components/BlogCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const LatestBlogCard = ({ post }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={post.imageUrl} alt={post.title} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-primary">{post.title}</Card.Title>
        <Card.Text>{post.excerpt}</Card.Text>
        <div className="mt-auto"> {/* Push button to the bottom */}
          <small className="text-muted mb-2 d-block">{post.date}</small>
          <Button variant="outline-primary" href={post.link}>
            Read More
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default LatestBlogCard;