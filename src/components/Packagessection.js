import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import '../App.css';
function Packagessection() {
  return (
    <div className="packages">
      <div className="sectionOne">
      <p id ="one">Live Healthy as your Family needs you </p>
      <p id="two">Mega Health Camp </p>
      <p id="three">Special Discount Packages </p>
      </div>
    <Container>
     
      <Row>
        {/* Card 1 */}
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card>
            
            <Card.Body>
     
              <Card.Title style={{backgroundColor:"#ffff00"}}>Basic HealthKure Check </Card.Title>
              <Card.Title style={{backgroundColor:"#ffff00",paddingLeft:"55px",marginTop:"-11px"}} >46 Tests</Card.Title>
              <Card.Text>
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#1a75ff"}}>FBS (1)</p> 
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#1a75ff"}} >CBC (14)</p>
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#1a75ff"}}>LIPID PROFILE (7)</p>
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#1a75ff"}}>KIDNEY PROFILE (6)</p>
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#1a75ff"}}>THYROID TEST (1)</p>
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"75px",color:"#1a75ff"}}>CUE (17)</p>
               <div className="pricesection">
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#ffffff"}} >MRP:<s>600</s></p>
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#ffffff"}} >PRICE: 299</p>
               </div>
              </Card.Text>
              <Button variant="primary">Book Now</Button>
         
            </Card.Body>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card>
          
            <Card.Body>
           <Card.Title style={{backgroundColor:"#ffff00"}}>SILVER HealthKure Check </Card.Title>
              <Card.Title style={{backgroundColor:"#ffff00",paddingLeft:"55px",marginTop:"-11px"}} >58 Tests</Card.Title>
              <Card.Text>
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#1a75ff"}}>FBS (1)</p> 
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#1a75ff"}} >CBC (14)</p>
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#1a75ff"}}>LIPID PROFILE (7)</p>
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#1a75ff"}}>KIDNEY PROFILE (6)</p>
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#1a75ff"}}>LIVERPROFILE (3)</p>
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"55px",color:"#1a75ff"}}>CUE (17)</p>
               <div className="pricesection">
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#ffffff"}} >MRP:<s style={{color:"#ff1a1a"}}>1000</s></p>
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#ffffff"}} >PRICE: 499</p>
               </div>
              </Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card>
            
            <Card.Body>
            <Card.Title style={{backgroundColor:"#ffff00"}}>GOLD HealthKure Check </Card.Title>
              <Card.Title style={{backgroundColor:"#ffff00",paddingLeft:"55px",marginTop:"-11px"}} >60 Tests</Card.Title>
              <Card.Text>
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#1a75ff"}}>FBS (1)</p> 
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#1a75ff"}} >CBC (14)</p>
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#1a75ff"}}>HBA1C (2)</p>
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#1a75ff"}}>LIPID PROFILE (7)</p>
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#1a75ff"}}>KIDNEY PROFILE (6)</p>
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#1a75ff"}}>LIVER PROFILE (10)</p>
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#1a75ff"}}>THYROID PROFILE (3)</p>
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"40px",color:"#1a75ff"}}>CUE (17)</p>
               <div className="pricesection">
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#ffffff"}} >MRP:<s>1400</s></p>
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#ffffff"}} >PRICE: 799</p>
               </div>
              </Card.Text>
              <Button variant="primary">Book Now</Button>
              </Card.Body>
          </Card>
        </Col>

        {/* Card 4 */}
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card>
           
            <Card.Body style={{backgroundColor:"#ffff00,#d9ee1f"}}>
            <Card.Title style={{backgroundColor:"#ffff00"}}>DIAMOND HealthKure Check </Card.Title>
              <Card.Title style={{backgroundColor:"#ffff00",paddingLeft:"55px",marginTop:"-11px"}} >62 Tests</Card.Title>
              <Card.Text>
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#1a75ff"}}>FBS (1)</p> 
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#1a75ff"}} >CBC (14)</p>
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#1a75ff"}}>HB1AC (2)</p>
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#1a75ff"}}>LIPID PROFILE (7)</p>
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#1a75ff"}}>KIDNEY PROFILE (6)</p>
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#1a75ff"}}>LIVER PROFILE (10)</p>
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#1a75ff"}}>VITAMIN D (D2&D3) (1)</p>
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"26.5px",color:"#1a75ff"}}>CUE (17)</p>
               <div className="pricesection">
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#ffffff"}} >MRP:<s>600</s></p>
               <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"18px",marginBottom:"-5px",color:"#ffffff"}} >PRICE: 299</p>
               </div>
              </Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Packagessection;