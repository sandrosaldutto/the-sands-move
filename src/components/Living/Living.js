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
            <h2 className="living__item">Floor Seats</h2>
            <h4 className="living__price"> 50$ </h4>
          </div>
          <p className="living__decription">Grey, round floor poufs, matching set of 2</p>
        </div>
        <div className="living__card">
          <TvUnit/>
          <div className="living__text-row-one">
            <h2 className="living__item">TV Unit</h2>
            <h4 className="living__price"> 50$ </h4>
          </div>
          <p className="living__decription">3 large drawers and shelves with few dings.</p>
        </div>
      </div>
    </section>
    </>
  );
}

export default Living;