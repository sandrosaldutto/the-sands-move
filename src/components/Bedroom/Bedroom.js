import "./Bedroom.scss";
import Carousel from "../Slideshow/Slideshow";

function Bedroom() {
  return (
    <section className="bedroom">
      <h1 className="bedroom__title">Bedroom</h1>
      <div className="bedroom__gallery">
        <div className="bedroom__card">
          <Carousel/>
        </div>
        <div className="bedroom__card">
          <Carousel/>
        </div>
        <div className="bedroom__card">
          <Carousel/>
        </div>
      </div>
    </section>
  );
}

export default Bedroom;
