import "./Nav.scss";
import { Link } from "react-scroll";

function Nav() {
  return (
    <>
      <section className="nav">
        <h1 className="nav__logo">Logo</h1>
        <div className="nav__container">
          <div className="nav__row">
          <Link className="nav__link">Bedroom</Link>
          <Link className="nav__link">Office</Link>
          <Link className="nav__link">Kitchen</Link>
          </div>
          <div className="nav__row">
          <Link className="nav__link">Dining</Link>
          <Link className="nav__link">Living</Link>
          <Link className="nav__link">Storage</Link>
          </div>
          <div className="nav__row">
          </div>
          <Link className="nav__link">Misc</Link>
        </div>
      </section>
    </>
  );
}

export default Nav;
