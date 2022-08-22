import React from 'react';
import { Carousel } from "react-bootstrap";
import IkeaCubeOne from "../../assets/images/storage-cube.jpg";

function SlideShowIkeaCubeOne() {
    return (
        <>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={IkeaCubeOne}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
      </>
    );
  }
  
  export default SlideShowIkeaCubeOne;