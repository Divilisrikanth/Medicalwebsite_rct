import React from 'react';
    import { Card, Button } from 'react-bootstrap';

    function BlogPostCard({ title, excerpt, imageUrl, link }) {
      return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{excerpt}</Card.Text>
            <Button variant="primary" href={link}>Read More</Button>
          </Card.Body>
        </Card>
      );
    }

    export default BlogPostCard;