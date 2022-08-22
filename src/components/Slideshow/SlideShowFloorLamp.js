import React from 'react';
import { Carousel } from "react-bootstrap";
import FloorLamp from "../../assets/images/lighting-floor-lamp.jpg";

function SlideShowFloorLamp() {
    return (
        <>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={FloorLamp}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
      </>
    );
  }
  
  export default SlideShowFloorLamp;