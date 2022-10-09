const projects = [
  {
    name: "Lift the World",
    liveSiteUrl: "https://lift-the-world.herokuapp.com/",
    img: {
      src: "https://media.giphy.com/media/z3CYMbpdbB6k1ncGPA/giphy.gif",
      alt: "Gif of Lift the World App",
      className: "project-lift-link",
    },
    github: "https://github.com/mscherryxu/lift-the-world",
    description: [
      "Worked with a team of 4 engineers to build a progressive web app (PWA) to track users' weightlifting progress and help users develop motivation to lift by using characters users can choose and unlock. Total weight lifted are compared to real-world objects. The more a user lifts, the more characters are unlocked.",
      "Used service worker and Lighthouse to check for app installability.",
      "Technologies used include: Javascript, HTML, CSS, React, Redux Thunk, Node.js, Express, and Sequelize with PostgreSQL.",
    ],
  },
  {
    name: "Baked by Fullstack",
    liveSiteUrl: "https://baked-byfullstack.herokuapp.com/",
    img: {
      src: "https://media.giphy.com/media/yu5h1wCpgITAc70KCJ/giphy.gif",
      alt: "Gif of Baked By Fullstack",
      className: "project-baked-link",
    },
    github: "https://github.com/mscherryxu/baked",
    description: [
      "Team project with 4 engineers to build an e-commerce site where guests and logged-in users can purchase baked goods. Admin can edit, add, and delete products.",
      "Technologies used include: Javascript, HTML, CSS, React, Redux Thunk, Node.js, Express, and Sequelize with PostgreSQL.",
    ],
  },
];

export default projects;
