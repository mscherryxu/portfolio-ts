import React from "react";

const Projects = () => {
  return (
    <div className="projects-parent-container">
      <h1 className="projects-title">Projects</h1>
      <h2>Lift the World</h2>
      <div className="project-container">
        <a
          href="https://lift-the-world.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          className="project-lift-gif"
        >
          <img
            src="https://media.giphy.com/media/z3CYMbpdbB6k1ncGPA/giphy.gif"
            alt="Gif of Lift the World App"
          />
        </a>
        <div className="project-info">
          <p>
            Worked with a team of 4 engineers to build a progressive web app
            (PWA) to track users' weightlifting progress and help users develop
            motivation to lift by using characters users can choose and unlock.
            Total weight lifted are compared to real-world objects. The more a
            user lifts, the more characters are unlocked.
          </p>
          <p>
            Used service worker and Lighthouse to check for app installability.
          </p>
          <p>
            Technologies used include: Javascript, HTML, CSS, React, Redux
            Thunk, Node.js, Express routes, and Sequelize with PostgreSQL.
          </p>
          <div className="button-container">
            <a
              href="https://lift-the-world.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="a-button"
            >
              Live Site
            </a>
            <a
              href="https://github.com/mscherryxu/lift-the-world"
              target="_blank"
              rel="noreferrer"
              className="a-button"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
      <h2>Baked By Fullstack</h2>
      <div className="project-container">
        <img
          src="https://media.giphy.com/media/yu5h1wCpgITAc70KCJ/giphy.gif"
          alt="Gif of Baked By Fullstack"
          className="project-baked-gif"
        />
        <div className="project-info">
          <p>
            Team project with 4 engineers to build an e-commerce site where
            guests and logged-in users can purchase baked goods. Admin can edit,
            add, and delete products.
          </p>
          <p>
            Technologies used include: Javascript, HTML, CSS, React, Redux
            Thunk, Node.js, Express routes, and Sequelize with PostgreSQL.
          </p>
          <div className="button-container">
            <a
              href="https://baked-byfullstack.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="a-button"
            >
              Live Site
            </a>
            <a
              href="https://github.com/mscherryxu/baked"
              target="_blank"
              rel="noreferrer"
              className="a-button"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
