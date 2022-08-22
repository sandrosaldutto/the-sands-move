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
        </Carousel.Item>
      </Carousel>
      </>
    );
  }
  
  export default SlideShowFloorSeats;