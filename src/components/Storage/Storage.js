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
        </div>
        <div className="storage__card">
          <IkeaCubeTwo/>
        </div>
      </div>
    </section>
  );
}

export default Storage;