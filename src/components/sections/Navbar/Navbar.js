import Link from "next/link";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            Mahmud
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                 Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                 work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                contact
                </a>
              </li>
              <button type="">
                Resume
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
