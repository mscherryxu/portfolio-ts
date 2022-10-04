import React from "react";

const About = () => {
  return (
    <div className="outer-container">
      <div className="about-parent-container">
        <h1 className="intro">
          About Me
          <img
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/320/girl_1f467.png"
            alt="Emoji of girl"
            className="girl-emoji"
          />
        </h1>
        <p className="intro-p">
          Born in <span className="city">New York, New York</span> and raised in{" "}
          <span className="city">Brooklyn, NY</span> by parents who immigrated
          to America.
        </p>
        <p className="intro-p">
          I enjoy learning and speaking in different languages. Growing up, I
          mostly spoke in <strong>Cantonese</strong> at home with my family, and
          I learned <strong>English</strong> from school and watching TV.
        </p>
        <p className="intro-p">
          I learned <strong>Mandarin</strong> from my first dietitian role in
          Flushing to communicate with clients, and I learned{" "}
          <strong>Spanish</strong> from my colleagues and patients at a nursing
          and rehabilitation facility I worked at.
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
