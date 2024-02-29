"use client"
import React, { useState } from "react";
import "./Experience.css";

const Experience = () => {

  const [experienceOne, setExperienceOne] = useState(true);
  const [experienceTwo, setExperienceTwo] = useState(false);
  const [experienceThree, setExperienceThree] = useState(false);


  const experienceToggleHandlerOne = () => {
    setExperienceOne(true)
    setExperienceTwo(false)
    setExperienceThree(false)
  }
  const experienceToggleHandlerTwo = () => {
    setExperienceOne(false)
    setExperienceTwo(true)
    setExperienceThree(false)
  }
  const experienceToggleHandlerThree = () => {
    setExperienceOne(false)
    setExperienceTwo(false)
    setExperienceThree(true)
  }


  return (
    <>
      <div className="experience_section">
        <div className="experience_section_title">
          <h1><span>02.</span> Were I've worked</h1>
          <div className='title_right_border'></div>
        </div>

        <div className="experience_container mt-4">
          <div className="row">
            <div className="col-md-2">
              <div className="experience_side_menu">
                <ul>
                  <li className={experienceOne == true && `activeExperienceMenu` }>
                    <button onClick={experienceToggleHandlerOne}>Spagreen</button>
                  </li>
                  <li className={experienceTwo == true && `activeExperienceMenuTwo`}>
                    <button onClick={experienceToggleHandlerTwo}>Softiconic</button>
                  </li>
                  <li className={experienceThree == true && `activeExperienceMenuTree`}>
                    <button onClick={experienceToggleHandlerThree}>Excelit</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-10 ">
              {experienceOne == true && <div className="experience_content_container_one">
                <div className="experience_content_title">
                  <h3>
                    Lead Engineer <span>@Spagreen</span>
                  </h3>
                  <p className="">May 2018 - Present</p>
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
              </div>}
              {experienceTwo == true &&<div className="experience_content_container_two">
                <div className="experience_content_title">
                  <h3>
                    Lead Engineer <span>@Softiconic</span>
                  </h3>
                  <p className="">May 2018 - Present</p>
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
              </div>}
              {experienceThree == true &&<div className="experience_content_container_three">
                <div className="experience_content_title">
                  <h3>
                    Lead Engineer <span>@Excelit</span>
                  </h3>
                  <p className="">May 2018 - Present</p>
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
              </div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
