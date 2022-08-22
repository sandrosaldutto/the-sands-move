import React from 'react';
import { Carousel } from "react-bootstrap";
import bedPhotoOne from "../../assets/images/bedroom-bed-1.jpg";
import bedPhotoTwo from "../../assets/images/bedroom-bed-2.jpg";
import bedPhotoThree from "../../assets/images/bedroom-bed-3.jpg";

function SlideShowBed() {
    return (
        <>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bedPhotoOne}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bedPhotoTwo}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bedPhotoThree}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      </>
    );
  }
  
  export default SlideShowBed;