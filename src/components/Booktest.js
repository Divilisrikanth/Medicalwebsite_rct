import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'; // Import Form and Button
import '../App.css'; // Make sure this path is correct

function BookTest() {
    const handleOnSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // In a real application, you would collect form data here:
        // const customerName = event.target.elements.customername.value;
        // const whatsappNumber = event.target.elements.whatsappnumber.value;
        // console.log('Name:', customerName, 'WhatsApp Number:', whatsappNumber);

        // Opening WhatsApp Web as per your original logic
        // Consider a more direct WhatsApp API link for pre-filled messages:
        // const whatsappLink = `https://wa.me/YOUR_PHONE_NUMBER?text=Hello%2C%20I%20want%20to%20book%20a%20test.%0AName%3A%20${encodeURIComponent(customerName)}%0ANumber%3A%20${encodeURIComponent(whatsappNumber)}`;
        // window.open(whatsappLink, "_blank", "noopener,noreferrer");

        window.open("https://web.whatsapp.com/", "_blank", "noopener,noreferrer");
    };

    return (
        <div className="test py-5"> {/* py-5 adds vertical padding */}
          
                <Container>
                    {/*
                      Row:
                      - g-4: Provides a default gutter (spacing) of 4 units between columns.
                      - justify-content-center: Centers the column horizontally when its width is less than 12.
                    */}
                    <Row className="g-4 justify-content-center">
                        {/*
                          Col:
                          - xs={12}: On extra-small screens (mobile, <576px), takes full 12 columns (100% width).
                          - md={8}: On medium screens (tablets, ≥768px), takes 8 out of 12 columns.
                          - lg={6}: On large screens (desktops, ≥992px), takes 6 out of 12 columns (50% width).
                          This combination ensures responsiveness across all devices.
                        */}
                        <Col xs={12} md={8} lg={6}>
                            {/*
                              Card:
                              - shadow-lg: Adds a large shadow for visual prominence.
                              - h-100: (Optional, useful if you had multiple cards in the same row
                                        to make them equal height. Not strictly necessary for a single card).
                            */}
                            <Card className="shadow-lg">
                                {/*
                                  Card.Body:
                                  - p-4: Adds 4 units of padding inside the card body (around the content).
                                         This creates space between the content and the card's edges.
                                */}
                                <Card.Body className="p-4">
                                    {/*
                                      Card.Title:
                                      - text-center: Centers the title text.
                                      - mb-4: Margin bottom of 4 units.
                                      - fs-3: Font size 3.
                                      - fw-bold: Font weight bold.
                                      - text-primary: Uses primary theme color.
                                    */}
                                    <Card.Title className="text-center mb-4 fs-3 fw-bold text-primary">Book a Test</Card.Title>

                                    {/* Form component from react-bootstrap for proper structure and handling */}
                                    <Form onSubmit={handleOnSubmit}>
                                        {/* Form.Group for each label-input pair */}
                                        <Form.Group className="mb-3">
                                            {/*
                                              Form.Label:
                                              - d-block: Makes the label a block element, ensuring it takes its own line.
                                              - text-center: Centers the label text.
                                            */}
                                            <Form.Label className="d-block text-center">Your Name</Form.Label>
                                            {/*
                                              Form.Control (input field):
                                              - placeholder: Self-explanatory.
                                              - className="text-center": Centers text typed inside the input.
                                            */}
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
                                            <Button variant="primary" type="submit" size="lg">
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