import "./Living.scss";
import FloorSeats from "../Slideshow/SlideShowFloorSeats";
import TvUnit from "../Slideshow/SlideShowTvUnit";

function Living() {
  return (
    <>
    <section className="living">
      <h1 id="livingroom" className="living__title">Living Room</h1>
      <div className="living__gallery">
        <div className="living__card">
          <FloorSeats/>
          <div className="living__text-row-one">
            <h2>Floor Seats</h2>
            <p> 50$ (2 Seats)</p>
          </div>
        </div>
        <div className="living__card">
          <TvUnit/>
          <div className="living__text-row-one">
            <h2>TV Unit</h2>
            <p> 50$ </p>
          </div>
          <p>3 large drawers and shelves with few dings.</p>
        </div>
      </div>
    </section>
    </>
  );
}

export default Living;