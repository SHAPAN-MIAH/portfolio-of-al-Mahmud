import React, { useState } from "react";
import { RxExternalLink } from "react-icons/rx";
import { FaRegFile } from "react-icons/fa";
import "./OtherProjects.css";

const OtherProjects = () => {
  const projectsList = [
    {
      title: "Project Name",
      description:
        "lorem10A web app for visualizing personalized Spotify data. View your top artists top tracks recently played tracks and detailed audio information.",
      used_technology: ["PHP", "Javascript", "MySQL"],
      project_url: "project_url",
    },
    {
      title: "Project Name",
      description:
        "lorem10A web app for visualizing personalized Spotify data. View your top artists top tracks recently played tracks and detailed audio information.",
      used_technology: ["PHP", "Javascript", "MySQL"],
      project_url: "project_url",
    },
    {
      title: "Project Name",
      description:
        "lorem10A web app for visualizing personalized Spotify data. View your top artists top tracks recently played tracks and detailed audio information.",
      used_technology: ["PHP", "Javascript", "MySQL"],
      project_url: "project_url",
    },
    {
      title: "Project Name",
      description:
        "lorem10A web app for visualizing personalized Spotify data. View your top artists top tracks recently played tracks and detailed audio information.",
      used_technology: ["PHP", "Javascript", "MySQL"],
      project_url: "project_url",
    },
    {
      title: "Project Name",
      description:
        "lorem10A web app for visualizing personalized Spotify data. View your top artists top tracks recently played tracks and detailed audio information.",
      used_technology: ["Laravel", "Vue js", "MySQL"],
      project_url: "project_url",
    },
    {
      title: "Project Name",
      description:
        "lorem10A web app for visualizing personalized Spotify data. View your top artists top tracks recently played tracks and detailed audio information.",
      used_technology: ["PHP", "Javascript", "MySQL"],
      project_url: "project_url",
    },
  ];

  const [projects, setProjects] = useState(projectsList);

  return (
    <>
      <div className="other_noteworthy_projects_section">
        <div className="other_noteworthy_projects_container">
          <div className="other_noteworthy_projects_title">
            <h1>Other NoteWorthy Projects</h1>
            <p>View The Archive</p>
          </div>

          <div className="other_noteworthy_projects_content_container">
            {projects.map((item) => (
              <div className="other_noteworthy_project_content">
                <div className="project_link">
                  <span className="file_icon">
                  <FaRegFile />
                  </span>
                  <span className="project_url_icon">
                    <RxExternalLink />
                  </span>
                </div>
                <div className="tile_description">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <div className="used_technology_container">
                  {item.used_technology.map((item) => (
                    <li>{item}</li>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="other_projects_show_more_btn">
            <button type="">Show More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherProjects;
