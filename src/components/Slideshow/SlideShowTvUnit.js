import React from "react";
import { Carousel } from "react-bootstrap";
import TvUnitOne from "../../assets/images/living-room-tv-unit-1.jpg";
import TvUnitTwo from "../../assets/images/living-room-tv-unit-2.jpg";

function SlideShowTvUnit() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={TvUnitOne} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={TvUnitTwo} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default SlideShowTvUnit;
