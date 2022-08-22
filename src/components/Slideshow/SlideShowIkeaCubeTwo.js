import React from 'react';
import { Carousel } from "react-bootstrap";
import IkeaCubeTwo from "../../assets/images/storage-rectangle.jpg";

function SlideShowIkeaCubeTwo() {
    return (
        <>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={IkeaCubeTwo}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
      </>
    );
  }
  
  export default SlideShowIkeaCubeTwo;