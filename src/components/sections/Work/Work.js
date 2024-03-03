"use client";
import React, { useState } from "react";
import "./Work.css";
import { FiGithub } from "react-icons/fi";
import { RxExternalLink } from "react-icons/rx";
import Image from "next/image";
import img from "../../../assets/pierre-chatel-innocenti-pxoZSTdAzeU-unsplash-1024x683.png";
import img2 from "../../../assets/pexels-evie-shaffer-2512282.jpg";

const Work = () => {
  const project = [
    {
      title: "Project Title",
      project_description:
        "A web app for visualizing personalized Spotify data. View your top artists top tracks recently played tracks and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      project_technology: ["PHP", "Laravel", "Javascript", "Vue js", "MySQL"],
      img_url: img,
    },
    {
      title: "Project Title Two",
      project_description:
        "A web app for visualizing personalized Spotify data. View your top artists top tracks recently played tracks and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      project_technology: ["PHP", "Laravel", "Javascript", "Vue js", "MySQL"],
      img_url: img2,
    },
  ];

  const [projects, setProjects] = useState(project);

  return (
    <>
      <div className="work_section">
        <div className="work_title">
          <h1>
            <span>03.</span> Some Thing I've Built
          </h1>
          <div className="title_right_border"></div>
        </div>

        <div className="featured_project_container mt-5">
          {projects.map((project) => (
            <div className="featured_project">
              <div className="project_content">
                <div className="project_title mt-4">
                  <p>Featured Project</p>
                  <h2>{project.title}</h2>
                </div>
                <div className="project_description">
                  <p>{project.project_description}</p>
                </div>
                <div className="project_technology">
                  {project.project_technology.map((item) => (
                    <li>{item}</li>
                  ))}
                </div>
                <div className="project_links">
                  <span className="git_icon">
                    <FiGithub />
                  </span>
                  <span className="project_url_icon">
                    <RxExternalLink />
                  </span>
                </div>
              </div>
              <div className="project_image">
                <Image width="650" src={project.img_url} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
