import "./Storage.scss";
import IkeaCubeOne from "../Slideshow/SlideShowIkeaCubeOne";
import IkeaCubeTwo from "../Slideshow/SlideShowIkeaCubeTwo";

function Storage() {
  return (
    <section className="storage">
      <h1 id="storage" className="storage__title">Storage</h1>
      <div className="storage__gallery">
        <div className="storage__card">
          <IkeaCubeOne/>
          <div className="storage__text-row-one">
            <h2 className="storage__item">Ikea Cube Storage</h2>
            <h4 className="storage__price"> 25$ </h4>
          </div>
          <p className="storage__decription">Black/Brown, has 4 spaces</p>
        </div>
        <div className="storage__card">
          <IkeaCubeTwo/>
          <div className="storage__text-row-one">
            <h2 className="storage__item">Ikea Cube Storage</h2>
            <h4 className="storage__price"> 50$ </h4>
          </div>
          <p className="storage__decription">Black/Brown, has 8 spaces, comes with 2</p>
        </div>
      </div>
    </section>
  );
}

export default Storage;