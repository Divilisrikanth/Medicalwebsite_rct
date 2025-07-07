import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BlogPostCard from './BlogPostCard';

function BlogSection({ posts }) {
  return (
    <Container>
      <Row>
        {posts.map((post, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <BlogPostCard
              title={post.title}
              excerpt={post.excerpt}
              imageUrl={post.imageUrl}
              link={post.link}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BlogSection;