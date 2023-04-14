const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const shapes = require("shapes.js");

const userPrompts = [
  {
    type: "input",
    name: "text",
    message: "Enter up to (3) characters: ",
  },
  {
    type: "input",
    name: "text-color",
    message: "What text color would you like? (enter keyword or hexadecimal): ",
  },

  {
    type: "list",
    name: "shape",
    message: "What shape would you like the logo to be?",
    choices: ["circle", "square", "trangle"],
  },
  {
    type: "input",
    name: "shape-color",
    message:
      "What shape color would you like? (enter keyword or hexadecimal): ",
  },
];

function createFile(fileName, data) {
  try {
    let filePath = path.join(__dirname, "/distri/", fileName);
    fs.writeFileSync(filePath, data);
    console.log("Generated logo.svg");
  } catch (error) {
    console.log("Error generating file");
    console.error(error);
  }
}

function init() {
  inquirer.prompt(userPrompts).then((userResponses) => {
    console.log(userResponses);
    const circleFile = `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r= "100" fill="green" />
  <text x="150" y="115" font-size="60" fill="#ffffff" text-anchor="middle">EAC</text>
</svg>
`;
    const triangleFile = `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="30,200 150,10 270,200" fill="pink" />
  <text x="150" y="160" font-size="60" fill="#ffffff" text-anchor="middle">EAC</text>
</svg>
`;
    const squareFile = `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" height="200" width= "200" fill="blue" />
  <text x="150" y="120" font-size="60" fill="#ffffff" text-anchor="middle">EAC</text>
</svg>
`;
    createFile("circle.svg", circleFile);
    createFile("triangle.svg", triangleFile);
    createFile("square.svg", squareFile);
  });
}

init();
