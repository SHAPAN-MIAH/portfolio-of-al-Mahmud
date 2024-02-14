import React from 'react';

const Showcase = () => {
  return (
    <div>
      <div className="home_section">
        <div className="showcase">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-6">
                <div className="showcase-dec">
                  <div className="wrapper">
                    <div>
                      {/* <!-- <div className="static-txt">Looking for a</div> --> */}
                      <h6
                        className="looking"
                        data-text="Looking For a Web Developer !..."
                      >
                        Looking For a Web Developer !...
                      </h6>
                    </div>
                    {/* <!-- <ul className="dynamic-txts">
                                    <li><span>Developer !..</span></li>
                                    <li><span>Front-end Developer !..</span></li>
                                    <li><span>Back-end Developer !..</span></li>
                                    <li><span></span></li>
                                </ul> --> */}
                  </div>
                  <h1>
                    Hello There!
                    <br />
                    I'M MD. SHAPAN MIAH
                  </h1>
                  <p>
                    Web Developer with over one year of experience. <br />
                    Experienced with all stages of the web development cycle for
                    dynamic web projects. I have a well-rounded skill set in web
                    development.
                  </p>
                </div>
                {/* <!-- <button type="button" id="hireMeBtn">Hire Me</button> --> */}
                <a
                  href="https://drive.google.com/uc?export=download&id=17Sw4XIQVbQppIDeExZeZwm8msa9Q31jp"
                  download
                >
                  <button type="button" id="downloadResumeBtn">
                    Download Resume <span className="btnSpan"></span>
                  </button>
                </a>
                {/* <!-- <a href="imgaes/Md. Shapan (Update Resume) .pdf" download>
                            <button type="button" id="downloadResumeBtn">Download Resume</button>
                        </a> --> */}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;