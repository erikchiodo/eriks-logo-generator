const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

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
    const svgFile = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="#FFA500" />
  <text x="50" y="55" fill="#ffffff" text-anchor="middle">Sample Text</text>
</svg>
`;
    createFile("svg.logo", svgFile);
  });
}

init();
