import React from "react";

const Projects = () => {
  return (
    <div className="parent-container">
      <h1>Projects</h1>
      <h2>Baked By Fullstack</h2>
      <a href="https://baked-byfullstack.herokuapp.com/">Deployed on Heroku</a>
      <p>
        1.5 week-long team project to build an e-commerce site. Built database
        in postgreSQL, and created API and ORM in Sequelize to interact with it.
        Authenticated users with Express middleware, and protected user data by
        salting and hashing their information. Used Javascript, React, and Redux
        Thunk to add/delete from cart, for registered users to see order history
        and admin users can edit and add products. Managed project milestones
        and workload using Kanban board.
      </p>
    </div>
  );
};

export default Projects;
