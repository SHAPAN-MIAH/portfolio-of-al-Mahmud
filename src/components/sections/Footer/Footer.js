import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer_section">
        <div className="get_in_touch_title">
          <h4>What's Next?</h4>
          <h1>Get In Touch</h1>
        </div>

        <div className="get_in_touch_content">
        <p>
            Although I'm not currently looking for any new opportunities, My
            <br/>
            inbox is always open. Whether you have a question or just want to
            <br/>
            say hi, I'll try my best to get back to you!
          </p>

          <div className="other_projects_show_more_btn">
            <button type="">Say Hello</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
