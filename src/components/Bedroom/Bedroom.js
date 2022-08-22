import "./Bedroom.scss";
import CarouselBed from "../Slideshow/SlideShowBed";
import CarouselBedTables from "../Slideshow/SlideShowBedTables";

function Bedroom() {
  return (
    <section className="bedroom">
      <h1 className="bedroom__title">Bedroom</h1>
      <div className="bedroom__gallery">
        <div className="bedroom__card">
          <CarouselBed/>
        </div>
        <div className="bedroom__card">
          <CarouselBedTables/>
        </div>
      </div>
    </section>
  );
}

export default Bedroom;
