import React from 'react';
import { Carousel } from "react-bootstrap";
import WhiteThrowPillows from "../../assets/images/misc-throw-pillow.jpg";

function SlideShowWhiteThrowPillows() {
    return (
        <>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={WhiteThrowPillows}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
      </>
    );
  }
  
  export default SlideShowWhiteThrowPillows;