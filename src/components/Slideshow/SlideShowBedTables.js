import React from 'react';
import { Carousel } from "react-bootstrap";
import bedSideTable from "../../assets/images/bedroom-bed-4.jpg";

function SlideShowBedTables() {
    return (
        <>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bedSideTable}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
      </>
    );
  }
  
  export default SlideShowBedTables;