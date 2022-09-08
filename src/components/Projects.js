import React from "react";

const Projects = () => {
  return (
    <div className="parent-container">
      <h1>Projects</h1>
      <h2>Lift the World</h2>
      <a href="https://lift-the-world.herokuapp.com/">Deployed on Heroku</a>
      <ul>
        <li>
          3-week long team project building a progressive web app (PWA) to track
          users' weightlifting progress and help users develop motivation to
          lift by using characters users can choose and unlock. The more a user
          lifts, the more characters are unlocked.
        </li>
        <li>
          Used service worker and Lighthouse to check for app installability.
        </li>
        <li>
          Technologies used, include Javascript, HTML, CSS, React, Redux Thunk,
          NodeJS, Express routes, and Sequelize with postgreSQL.
        </li>
      </ul>
      <h2>Baked By Fullstack</h2>
      <a href="https://baked-byfullstack.herokuapp.com/">Deployed on Heroku</a>
      <ul>
        <li>1.5 week-long team project to build an e-commerce site.</li>
        <li>
          Built database in postgreSQL, and created API and ORM in Sequelize to
          interact with it.
        </li>
        <li>
          Authenticated users with Express middleware, and protected user data
          by salting and hashing their information.
        </li>
        <li>
          Used Javascript, React, and Redux Thunk to add/delete from cart, for
          registered users to see order history and admin users can edit and add
          products.
        </li>
        <li>Managed project milestones and workload using Kanban board.</li>
      </ul>
    </div>
  );
};

export default Projects;
