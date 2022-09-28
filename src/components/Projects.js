import React from "react";

const Projects = () => {
  return (
    <div className="parent-container">
      <h1 className="projects-title">Projects</h1>
      <h2>Lift the World</h2>
      <a href="https://lift-the-world.herokuapp.com/">Deployed on Heroku</a>
      <div className="project-container">
        <img
          src="https://media4.giphy.com/media/fBWUcjXDlQf1QMGdrO/giphy.gif?cid=790b761186dcc13a29592b84ed058a6445d8a049e7ef745d&rid=giphy.gif&ct=g"
          alt="Gif of Lift the World App"
          className="project-gif"
        />
        <ul className="list">
          <li>
            Team project with 4 engineers building a progressive web app (PWA)
            to track users' weightlifting progress and help users develop
            motivation to lift by using characters users can choose and unlock.
            The more a user lifts, the more characters are unlocked.
          </li>
          <li>
            Used service worker and Lighthouse to check for app installability.
          </li>
        </ul>
      </div>
      <h2>Baked By Fullstack</h2>
      <a href="https://baked-byfullstack.herokuapp.com/">Deployed on Heroku</a>
      <ul className="list">
        <li>
          Team project with 4 engineers to build an e-commerce site to sell
          baked goods.
        </li>
      </ul>
    </div>
  );
};

export default Projects;
