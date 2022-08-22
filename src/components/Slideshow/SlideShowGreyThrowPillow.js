import React from 'react';
import { Carousel } from "react-bootstrap";
import GreyThrowPillow from "../../assets/images/misc-throw-pillow-grey.jpg";

function SlideShowGreyThrowPillow() {
    return (
        <>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={GreyThrowPillow}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
      </>
    );
  }
  
  export default SlideShowGreyThrowPillow;