import "./Bedroom.scss";
import bedPhotoOne from "../../assets/images/bedroom-bed-1.jpg";
import bedPhotoTwo from "../../assets/images/bedroom-bed-2.jpg";
import bedPhotoThree from "../../assets/images/bedroom-bed-3.jpg";
import Carousel from "../Slideshow/Slideshow";

function Bedroom() {
  return (
    <section className="bedroom">
      <h1 className="bedroom__title">Bedroom</h1>
      <div className="bedroom__gallery">
        <div className="bedroom__card">
          <Carousel/>
        </div>
      </div>
    </section>
  );
}

export default Bedroom;
