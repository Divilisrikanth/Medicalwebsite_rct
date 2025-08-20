import React, { useState } from "react";
import { Card, Image, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Feedback.css'; // Ensure this file exists and is imported

const testimonials = [
  // ... (your testimonials array remains the same) ...
  {
    name: "Michael Donovan",
    title: "PATIENT one ",
    text: "I visited this branch recently.Well responsible staff.Great and clean maintenance.MRI & CT Imaging & Lab facilities are awesome.Thanks for the services.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Johnson",
    title: "Patient two",
    text: "Hi my brother visited to the your medical centre for the mri ,staff are very polite and guided in proper manner and for reports they sent through whats up as im from out of station thank you i recommended to come to vijaya medical centre for all the tests",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Chen",
    title: "Patient three",
    text: "Excellent in diagnostic services with premium technology in all spheres of investigations and also qualified staff approaching each and every patients that very helpful to all who are visiting centre",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Emma Roberts",
    title: "Patient Four ",
    text: "Reach location easily,adjacent to main road.Receiving by staff was good and well supported.Only drawback is there is no digital payments.i was struggled to collect cash by asking others.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "James Lee",
    title: "Patient five",
    text: "Hi my self raju visited Vijaya medical centre for ct coronory angio staff very polite and very co operative good behaviour and guide in proper way for the test done Thanku you",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
  },
];

const Feedback = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const renderCards = () => {
    const items = [];

    // Determine which cards to render based on screen size (for initial render)
    // For more robust responsiveness, consider using a custom hook or event listener for window.innerWidth
    const isMobileView = window.innerWidth <= 768; // Define your mobile breakpoint here

    // On mobile, only render the center card
    // On larger screens, render all three (left, center, right)
    const cardRenderIndices = isMobileView ? [0] : [-1, 0, 1];

    for (let i of cardRenderIndices) {
      let index = (activeIndex + i + testimonials.length) % testimonials.length;
      const isCenter = i === 0;

      items.push(
        <Col
          key={index}
          // Hide side cards on small screens, show only center card
          className={`d-flex justify-content-center ${!isCenter ? 'd-none d-md-block' : ''}`}
          // *** ADJUSTED COL SIZING FOR NORMAL VIEW ***
          xs={12} // Mobile: full width
          sm={10} // Small screens: 10/12 width (to give some side padding)
          md={4} // Medium screens and up: EACH card takes 4/12 of the row
          lg={4} // Large screens and up: EACH card takes 4/12 of the row
        >
          <Card
            // Changed card classes for more consistent styling across all 3 cards
            className={`text-white text-center shadow rounded-4 feedback-card ${
              isCenter ? "bg-primary active-feedback-card" : "bg-secondary"
            }`}
            style={{ transition: "all 0.3s ease" }}
          >
            <Card.Body>
              <Image
                src={testimonials[index].image}
                roundedCircle
                width={isCenter ? 80 : 80} // Set both to 80 for consistent image size
                height={isCenter ? 80 : 80} // Set both to 80 for consistent image size
                className="mb-2"
              />
              <h6>{testimonials[index].name}</h6>
              <small>{testimonials[index].title}</small>
              <p className="small mt-2">{testimonials[index].text}</p>
            </Card.Body>
          </Card>
        </Col>
      );
    }
    return items;
  };

  return (
    <div className="text-center my-5 position-relative feedback-carousel-container">
      <h4 className="mb-4">What Our Patients Say</h4>
      <Row className="justify-content-center align-items-center">{renderCards()}</Row>

      {/* Arrows (unchanged) */}
      <Button
        variant="light"
        onClick={handlePrev}
        className="position-absolute top-50 start-0 translate-middle-y feedback-arrow feedback-arrow-left"
      >
        &#8592;
      </Button>
      <Button
        variant="light"
        onClick={handleNext}
        className="position-absolute top-50 end-0 translate-middle-y feedback-arrow feedback-arrow-right"
      >
        &#8594;
      </Button>

      {/* Dots (unchanged) */}
      <div className="d-flex justify-content-center mt-3 gap-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            onClick={() => setActiveIndex(index)}
            className="feedback-dot"
            style={{
              backgroundColor: index === activeIndex ? "#007bff" : "#ccc",
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Feedback;