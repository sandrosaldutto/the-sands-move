import React from 'react';
import { Carousel } from "react-bootstrap";
import FloorSeats from "../../assets/images/living-room-floor-seats.jpg";

function SlideShowFloorSeats() {
    return (
        <>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={FloorSeats}
            alt="First slide"
          />
          <Carousel.Caption>
            <p class="p-1 mb-2 bg-light text-dark bg-opacity-75">Dimensions: (18"w x 7"h)</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </>
    );
  }
  
  export default SlideShowFloorSeats;