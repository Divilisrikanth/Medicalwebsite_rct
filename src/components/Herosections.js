import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Herosectionimage from '../assets/herosectionimage.jpg'; // Make sure this path is correct

function Herosection() {
  return (
    <div className='maincontainer'>
    <div className='herosection py-0'> {/* Added py-5 for vertical padding */}
      <Container>
        {/* Use gx-5 for horizontal gutter (spacing between columns) on larger screens */}
        {/* Use gy-4 for vertical gutter (spacing between stacked columns) on smaller screens */}
        <Row className="g-4 g-md-5 align-items-center">{/* Added align-items-center to vertically center content if needed */}
          {/* First Column for the Text Card */}
          <Col xs={12} md={6} className="mb-3 mb-md-0 d-flex"> {/* d-flex ensures card fills height */}
            <Card className="h-100 shadow-sm"> {/* h-100 makes card take full height of its column */}
              {/* If you want an image here, replace src below with a valid path */}
              {/* <Card.Img variant="top" src="your_image_path_here.jpg" alt="Description" /> */}
              <Card.Body>
                <Card.Title className="text-primary fs-4 fw-bold mb-3">Quality You Can Trust</Card.Title>
                <Card.Text>
                  Uncompromising on Quality and Accreditation. Quality is at the heart of our Diagnostic Centre’s operations —it’s a culture that’s ingrained in our practices and
                  deep-rooted in our professional approaches. Every process is governed by globally recognised standards, ensuring your
                  health is always the top priority. Our diagnostic laboratories are accredited by NABL, our flagship centre is certified
                  under ISO certification, and our operations align with NABH protocols to ensure clinical excellence and patient safety.
                </Card.Text>

                <Card.Title className="text-primary fs-4 fw-bold mt-4 mb-3">Accessible Care, Thoughtfully Delivered</Card.Title>
                <Card.Text>
                  Today, we are present in 6 states, across 25 cities with over 160 centres.
                  Each one of these centres carries the same hallmark of care. Our centres are spread over multiple locations across 25+ cities, which means there’s a Vijaya diagnostic centre near you
                  whenever you want effective diagnostic care. No matter which centre you visit, our philosophy remains unchanged: offering patients consistent quality, accessible service,
                  and unwavering integrity. For those who cannot come to us because of health issues, age, or tight schedules, we come to them.
                </Card.Text>
                <Card.Text>
                  Because You Deserve Nothing Less. When you choose our Diagnostic Centre, you are choosing care that is personal, not transactional. You are choosing an experience grounded in science and service rooted in empathy.
                  You are choosing a place where every step—from booking a diagnostic test to reporting—is designed around your comfort.
                  At every diagnostic centre under our network, the focus remains the same: accurate diagnosis, timely reporting, seamless experience, and compassionate communication.
                  Most importantly, you are choosing a team that understands that behind every test lies a person—a life, a story, and a hope. And that’s a responsibility we carry with pride.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Second Column for the Image Card */}
          <Col xs={12} sm={6} className="d-flex">{/* d-flex ensures card fills height */}
            <Card className="h-100 shadow-sm overflow-hidden"> {/* overflow-hidden to contain image if larger */}
              <Card.Body className="p-0 d-flex align-items-center justify-content-center"> {/* p-0 removes padding */}
                <img src={Herosectionimage} id="hrosctimg" alt="Hero Section" className="img-fluid" /> {/* img-fluid makes image responsive */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
}

export default Herosection;