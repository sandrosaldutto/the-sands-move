import "./Nav.scss";
import { Link } from "react-scroll";

function Nav() {
  return (
    <>
      <section className="nav">
        <h1 className="nav__logo">Logo</h1>
        <div className="nav__container">
          <div className="nav__row">
            <Link
              className="nav__link"
              to="bedroom"
              spy={true}
              smooth={true}
              offset={-275}
              duration={250}
            >
              Bedroom
            </Link>
            <Link
              className="nav__link"
              to="livingroom"
              spy={true}
              smooth={true}
              offset={-275}
              duration={250}
            >
              Living
            </Link>
            <Link className="nav__link">Office</Link>
          </div>
          <div className="nav__row">
            <Link className="nav__link">Kitchen</Link>
            <Link className="nav__link">Dining</Link>
            <Link className="nav__link">Storage</Link>
          </div>
          <div className="nav__row"></div>
          <Link className="nav__link">Misc</Link>
        </div>
      </section>
    </>
  );
}

export default Nav;
