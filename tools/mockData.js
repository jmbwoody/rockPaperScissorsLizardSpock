const courses = [
  {
    id: 1,
    title: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 2,
    title: "React: The Big Picture",
    slug: "react-big-picture",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 3,
    title: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 4,
    title: "Building a JavaScript Development Environment",
    slug: "javascript-development-environment",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 5,
    title: "Building Applications with React and Redux",
    slug: "react-redux-react-router-es6",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 6,
    title: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 7,
    title: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    authorId: 1,
    category: "Software Practices",
  },
  {
    id: 8,
    title: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    authorId: 1,
    category: "Software Architecture",
  },
  {
    id: 9,
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    authorId: 1,
    category: "Career",
  },
  {
    id: 10,
    title: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    authorId: 1,
    category: "HTML5",
  },
];

const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" },
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: "",
};

const results = [
  { id: 11, result: "draw" },
  { id: 12, result: "Winner" },
  { id: 13, result: "Winner" },
  { id: 14, result: "Lose" },
  { id: 15, result: "Lose" },
  { id: 21, result: "Lose" },
  { id: 22, result: "Draw" },
  { id: 23, result: "Winner" },
  { id: 24, result: "Winner" },
  { id: 25, result: "Lose" },
  { id: 31, result: "Winner" },
  { id: 32, result: "Lose" },
  { id: 33, result: "Draw" },
  { id: 34, result: "Winner" },
  { id: 35, result: "Lose" },
  { id: 41, result: "Winner" },
  { id: 42, result: "Lose" },
  { id: 43, result: "Lose" },
  { id: 44, result: "Draw" },
  { id: 45, result: "Winner" },
  { id: 51, result: "Lose" },
  { id: 52, result: "Winner" },
  { id: 53, result: "Winner" },
  { id: 54, result: "Lose" },
  { id: 55, result: "Draw" },
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors,
  results,
};
