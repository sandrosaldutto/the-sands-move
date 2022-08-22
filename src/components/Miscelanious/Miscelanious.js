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
        </div>
        <div className="misc__card">
          <WhiteThrowPillows/>
        </div>
        <div className="misc__card">
          <GreyThrowPillow/>
        </div>
      </div>
    </section>
    </>
  );
}

export default Miscelanious;