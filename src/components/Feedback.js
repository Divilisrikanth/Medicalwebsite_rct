import React, { useState } from "react";
import { Card, Image, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const testimonials = [
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

    for (let i = -1; i <= 1; i++) {
      let index = (activeIndex + i + testimonials.length) % testimonials.length;
      const isCenter = i === 0;
      items.push(
        <Col key={index} className="d-flex justify-content-center">
          <Card
            className={`text-white ${
              isCenter ? "bg-primary large-square" : "bg-secondary small-square"
            } text-center shadow rounded-4`}
            style={{
              width: isCenter ? "300px" : "200px",
              minHeight: isCenter ? "350px" : "280px",
              transition: "all 0.3s ease",
            }}
          >
            <Card.Body>
              <Image
                src={testimonials[index].image}
                roundedCircle
                width={isCenter ? 80 : 50}
                height={isCenter ? 80 : 50}
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
    <div className="text-center my-5 position-relative">
      <h4 className="mb-4">What Our Patients Say</h4>
      <Row className="justify-content-center align-items-center">{renderCards()}</Row>

      {/* Arrows */}
      <Button
        variant="light"
        onClick={handlePrev}
        className="position-absolute top-50 start-0 translate-middle-y"
        style= {{borderRadius: "50%",
          fontSize: "2.5rem",
    width: "70px",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",

        }}
      >
        &#8592;
      </Button>
      <Button
        variant="light"
        onClick={handleNext}
        className="position-absolute top-50 end-0 translate-middle-y"
        style={{ borderRadius: "50%",

    fontSize: "3rem", // Increased size
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
         }}
      >
        &#8594;
      </Button>



      {/* Dots */}
      <div className="d-flex justify-content-center mt-3 gap-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: index === activeIndex ? "#007bff" : "#ccc",
              cursor: "pointer",
              display: "inline-block",
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
