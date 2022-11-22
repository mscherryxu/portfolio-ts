import React from "react";

const Home = () => {
  return (
    <div className="outer-container">
      <h1 className="title">Hi, my name is Cherry Xu! 👋</h1>
      <h2 className="career-title">
        Registered Dietitian ➡️ Full-Stack Software Engineer
      </h2>
      <img src="/images/Cherry.jpeg" alt="Cherry" className="profile-image" />
      <p>
        As a <i>Registered Dietitian</i> since 2014, I've enjoyed working with
        others and helping improve others' health through lifestyle changes and
        nutrition education.
      </p>
      <p>
        Now, I am looking for work opportunities to keep learning and growing as
        a <i>Software Engineer</i>. Time passes by so quickly with building
        projects, creating applications, and using new technologies. I would
        like to continue helping others with my newfound passion in technology.
      </p>
    </div>
  );
};

export default Home;
