import React from "react";

const About = () => {
  return (
    <div className="outer-container">
      <div className="about-parent-container">
        <h1 className="intro">About Me</h1>
        <p className="intro-p">
          Born in New York, New York and raised in Brooklyn, NY by parents who
          immigrated to America.
        </p>
        <p className="intro-p">
          I enjoy learning and speaking in different languages. Growing up, I
          mostly spoke in Cantonese at home with my family, and I learned
          English from school and watching TV.
        </p>
        <p className="intro-p">
          I learned Mandarin from my first dietitian role in Flushing to
          communicate with clients, and I learned Spanish from my colleagues and
          patients at a nursing and rehabilitation facility I worked at.
        </p>
        <div className="hobbies-container">
          My hobbies include:
          <ul className="hobbies">
            <li>Jogging 🏃</li>
            <li>Yoga and meditation 🧘</li>
            <li>Video games 🎮</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
