import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import "./SocialLink.css";

const SocialLink = () => {
  return (
    <div className="social_link_container">
      <ul>
        <li>
          <FiGithub />
        </li>
        <li>
          <FaLinkedinIn />
        </li>
        <li>
          <FaFacebookF />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaCodepen />
        </li>
        <div className="social_link_container_bottom_border"></div>
      </ul>
    </div>
  );
};

export default SocialLink;
