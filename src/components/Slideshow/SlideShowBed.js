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
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bedPhotoTwo}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bedPhotoThree}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl
              consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </>
    );
  }
  
  export default SlideShowBed;