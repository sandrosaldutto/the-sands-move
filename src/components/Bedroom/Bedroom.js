import "./Bedroom.scss";
import CarouselBed from "../Slideshow/SlideShowBed";
import CarouselBedTables from "../Slideshow/SlideShowBedTables";

function Bedroom() {
  return (
    <section className="bedroom">
      <h1 id="bedroom" className="bedroom__title">Bedroom</h1>
      <div className="bedroom__gallery">
        <div className="bedroom__card">
          <CarouselBed/>
          <div className="bedroom__text-row-one">
            <h2 className="bedroom__item">Queen Bed</h2>
            <h4 className="bedroom__price"> 250$ </h4>
          </div>
          <p className="bedroom__decription">Black steel frame, soft mattress & headboard</p>
        </div>
        <div className="bedroom__card">
          <CarouselBedTables/>
          <div className="bedroom__text-row-one">
            <h2 className="bedroom__item">Bedside Tables</h2>
            <h4 className="bedroom__price"> 25$ </h4>
          </div>
          <p className="bedroom__decription">Black steel tables, matching set of 2</p>
        </div>
      </div>
    </section>
  );
}

export default Bedroom;
