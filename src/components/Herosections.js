import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage.js';
import firstslide from '../assets/sliderone.jpg';
import secondslide from '../assets/slidertwo.jpg';

const Herosection =  () => {
  return (
    /* using imports we will import image from assets folder and vaiable should be added in sc={variable} by addding carouse.Item*/  
   /* it is  a sub component of carousel component we can add new image*/
     <div className='herosection'>
    <Carousel style={{marginTop:"25px" }}>
      <Carousel.Item>
     
        <ExampleCarouselImage 
        src={firstslide} alt="sliderone"
        text="First slide" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide"
        src={secondslide} alt="second slide"
         />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </div>
  );
}

export default Herosection;