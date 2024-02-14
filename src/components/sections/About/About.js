import Image from "next/image";
import React from "react";
import profileImg from "../../../assets/profileimg.jpg";
import "./About.css";

const technologiesItems = [
  {
    name: "PHP",
  },
  {
    name: "Laravel",
  },
  {
    name: "Javascript",
  },
  {
    name: "Node.js",
  },
];
const About = () => {
  return (
    <>
      <div className="about_section">
        <div className="about_title">
          <h1>About Me</h1>
        </div>
        <div className="about_dec_container">
          <div className="row">
            <div className="col-md-6">
              <div className="about_dec">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <p>
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum
                </p>
                <p>
                  It was popularised in the 1960s with passages, and more
                  recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum
                </p>
              </div>
              <div className="technologies_container">
                <p>
                  Here are a few technologies i've been working with recently:
                </p>

                <div className="technology_item">
                  {technologiesItems.map((item) => (
                    <span>
                      <p>{item.name}</p>
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile_image">
                <Image
                  src={profileImg}
                  alt="Picture of the author"
                  className="img"
                />
              </div>
              <div className="profile_border"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
