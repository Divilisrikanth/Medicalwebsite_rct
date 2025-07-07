// src/components/LatestBlogsSection.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LatestBlogCard from '../components/LatestBlogCard.js';
import LastestblogPosts from '../components/LatestBlogPost.js'; // Import your mock data

const LatestBlogsSection = () => {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    // In a real application, you would fetch data from an API here:
    // fetch('/api/latest-blogs')
    //   .then(response => response.json())
    //   .then(data => setLatestPosts(data))
    //   .catch(error => console.error('Error fetching blog posts:', error));

    // For now, use the mock data:
    setLatestPosts(LastestblogPosts.slice(0, 3)); // Display only the latest 3 for a "latest" section
  }, []);

  return (
    <section className="latest-blogs-section py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 text-primary">Our Latest Insights & Articles</h2>
        <Row className="g-4"> {/* g-4 adds gutter space between columns */}
          {latestPosts.map((post) => (
            <Col key={post.id} md={6} lg={4} className="d-flex"> {/* d-flex for equal card height */}
              <BlogCard post={post} />
            </Col>
          ))}
        </Row>
        <div className="text-center mt-5">
          <Button variant="primary" size="lg" href="/blog">
            View All Blogs
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default LatestBlogsSection;