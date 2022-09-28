import React from "react";

const About = () => {
  return (
    <div className="outer-container">
      <div className="about-parent-container">
        <h1 className="intro">Hi, my name is Cherry Xu! 👋</h1>
        <h2 className="career-title">
          Registered Dietitian to an aspiring Full-Stack Software Engineer
        </h2>
        <img src="/images/Cherry.jpeg" alt="Cherry" className="profile-image" />

        <h3>My Journey</h3>
        <p>
          As a Registered Dietitian since 2014, I've enjoyed working with others
          and helping improve others' health through lifestyle changes and
          nutrition education.
        </p>
        <p>
          Now, I am looking for a change to constantly learn and grow and found
          Software Engineering as my new passion. Time passes by so quickly with
          building projects, creating applications, and using new technologies.
          I would like to continue helping others with my newfound passion in
          technology.
        </p>
      </div>
    </div>
  );
};

export default About;
