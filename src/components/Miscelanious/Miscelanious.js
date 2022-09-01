import "./Miscelanious.scss";
import FloorLamp from "../Slideshow/SlideShowFloorLamp";
import WhiteThrowPillows from "../Slideshow/SlideShowWhiteThrowPillows";
import GreyThrowPillow from "../Slideshow/SlideShowGreyThrowPillow";

function Miscelanious() {
  return (
    <>
    <section className="misc">
      <h1 id="misc" className="misc__title">Misc</h1>
      <div className="misc__gallery">
        <div className="misc__card">
          <FloorLamp/>
          <div className="misc__text-row-one">
            <h2 className="misc__item">Floor Lamp</h2>
            <h4 className="misc__price"> 50$ </h4>
          </div>
          <p className="misc__decription">Adjustable position, standard bulb</p>
        </div>
        <div className="misc__card">
          <WhiteThrowPillows/>
          <div className="misc__text-row-one">
            <h2 className="misc__item">White Throw Pillow</h2>
            <h4 className="misc__price"> 25$ </h4>
          </div>
          <p className="misc__decription">2 Pillows</p>
        </div>
        <div className="misc__card">
          <GreyThrowPillow/>
          <div className="misc__text-row-one">
            <h2 className="misc__item">Grey Throw Pillow</h2>
            <h4 className="misc__price"> 10$ </h4>
          </div>
          <p className="misc__decription">1 Pillow</p>
        </div>
      </div>
    </section>
    </>
  );
}

export default Miscelanious;