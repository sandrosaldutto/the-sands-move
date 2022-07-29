import "./Nav.scss";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <section className="nav">
        <h1 className="nav__logo">Logo</h1>
        <div className="nav__container">
          <div className="nav__row">
            <Link>Bedroom</Link>
            <Link>Office</Link>
          </div>
          <div className="nav__row">
            <Link>Dining</Link>
            <Link>Living</Link>
          </div>
          <div className="nav__row">
            <Link>Storage</Link>
            <Link>Kitchen</Link>
          </div>
          <div className="nav__row nav__row--single">
            <Link>Misc</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Nav;
