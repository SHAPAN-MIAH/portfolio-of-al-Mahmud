import React from "react";
import "./Showcase.css";

const Showcase = () => {
  return (
    <div>
      <div className="showcase_section">
        <div className="showcase">
          <div className="row d-flex align-items-center">
            <div className="col-md">
              <div className="showcase_title">
                <h6
                  className="looking"
                  data-text="Looking For a Web Developer !..."
                >
                  Hi, my name is..
                </h6>
                <br />

                <h1>
                  Al Mahmud
                  <br />
                  <span>I build things for the web.</span>
                </h1>
              </div>
              <div className="showcase_dec">
                <p>
                  Web Developer with over one year of experience. <br />
                  Experienced with all stages of the web development cycle for
                  dynamic web projects. I have a well-rounded skill set in web
                  development.
                </p>
              </div>

              <button type="button" id="checkoutCourseBtn">
                checkout my course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
