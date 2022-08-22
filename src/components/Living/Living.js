import "./Living.scss";
import FloorSeats from "../Slideshow/SlideShowFloorSeats";

function Living() {
  return (
    <>
    <section className="living">
      <h1 className="living__title">Living Room</h1>
      <div className="living__gallery">
        <div className="living__card">
          <FloorSeats/>
          <div className="living__text-row-one">
            <h2>Floor Seats</h2>
            <p> 50$ (2 Seats)</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Living;