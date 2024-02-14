import Link from "next/link";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      {/* <navbar className="">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="#">
               MD. SHAPAN
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/projects">
                    Projects
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to="images/Web developer Shapan Resume.pdf"
                  >
                    Resume
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      </navbar> */}

      <nav className="navbar navbar-expand-lg  fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            M
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
