import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <>
      <div className="experience_section">
        <div className="experience_section_title">
          <h1>Were I've worked</h1>
        </div>

        <div className="experience_container">
          <div className="row">
            <div className="col-md-3">
              <div className="experience_side_menu">
                <ul>
                  <li>Spagreen</li>
                  <li>Softiconic</li>
                  <li>Excelit</li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="experience_content_container">
                <div className="experience_content_title">
                  <h3>
                    Lead Engineer <span>@Spagreen</span>
                  </h3>
                  <small>May 2018 - Present</small>
                </div>
                <div className="experience_content">
                  <ul>
                    <li>
                      SpaGreen Creative is the company that work codecanyone
                      based project. A team who have vast expertise to build
                      custom software and help organizations to scale and
                      achieve a competitive advantage by providing powerful and
                      adaptable web and mobile solutions that meet the ultimate
                      need of the clients worldwide
                    </li>
                    <li>
                      Write modern, performant, maintainable code for a diverse
                      array of client and internal projects
                    </li>
                    <li>
                      {" "}
                      Work with a variety of different languages, platforms,
                      frameworks, and content management systems such as
                      JavaScript, Vuejs, WordPress, PHP, and Laravel
                    </li>
                    <li>
                      {" "}
                      Communicate with multi-disciplinary teams of engineers,
                      designers, producers, and clients on a daily basis
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
