import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'; // Import Form and Button
import '../App.css'; // Make sure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css';
function BookTest() {
    const handleOnSubmit = (event) => {
        event.preventDefault(); 


        window.open("https://web.whatsapp.com/", "_blank", "noopener,noreferrer");
    };

    return (
        <div className="test py-5"> 
          
                <Container>
                 
                    <Row className="g-4 justify-content-center">
                    
                        <Col xs={12} md={8} lg={6}>
                            
                            <Card className="shadow-lg">
                                
                                <Card.Body className="p-4">
                                   
                                    <Card.Title className="text-center mb-4 fs-3 fw-bold text-primary">Book a Test</Card.Title>

                                   
                                    <Form onSubmit={handleOnSubmit}>
                                       
                                        <Form.Group className="mb-3">
                                            
                                            <Form.Label className="d-block text-center">Your Name</Form.Label>
                                            
                                            <Form.Control
                                                type="text"
                                                name="customername"
                                                placeholder="Please Enter your name"
                                                className="text-center"
                                                required // Make this field required
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-4"> {/* Increased mb-4 for more space before button */}
                                            <Form.Label className="d-block text-center">Your WhatsApp Number</Form.Label>
                                            <Form.Control
                                                type="tel" // Use type="tel" for phone numbers
                                                name="whatsappnumber"
                                                placeholder="Please Enter your WhatsApp Number"
                                                className="text-center"
                                                required // Make this field required
                                            />
                                        </Form.Group>

                                        {/*
                                          d-grid gap-2:
                                          - d-grid: Makes the button take the full width of its parent.
                                          - gap-2: Adds spacing if there were multiple buttons in this grid.
                                        */}
                                        <div className="d-grid gap-2">
                                            {/*
                                              Button component from react-bootstrap:
                                              - variant="primary": Uses Bootstrap's primary button style.
                                              - type="submit": For form submission.
                                              - size="lg": Makes the button larger.
                                            */}
                                            <Button variant="primary" type="submit" size="lg" id="bookatestbuton">
                                                Submit
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
           
        </div>
    );
}

export default BookTest;