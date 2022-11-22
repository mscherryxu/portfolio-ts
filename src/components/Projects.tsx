import React from "react";
import projects from "../data/projects";

const Projects = () => {
  return (
    <div className="projects-parent-container">
      <h1 className="projects-title">Projects</h1>
      {projects.map(({ name, liveSiteUrl, img, github, description }) => {
        return (
          <>
            <h2>{name}</h2>
            <div className="project-container">
              <a
                href={liveSiteUrl}
                target="_blank"
                rel="noreferrer"
                className={img.className}
              >
                <img src={img.src} alt={img.alt} />
              </a>
              <div className="project-info">
                {description.map((p) => (
                  <p>{p}</p>
                ))}
                <div className="button-container">
                  <a
                    href={liveSiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="a-button"
                  >
                    Live Site
                  </a>
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="a-button"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Projects;
