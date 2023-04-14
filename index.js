const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const { CircleSVG, TriangleSVG, SquareSVG } = require("./assets/shapes.js");

const userPrompts = [
  {
    type: "input",
    name: "text",
    message: "Enter up to (3) characters: ",
  },
  {
    type: "input",
    name: "textColor",
    message: "What text color would you like? (enter keyword or hexadecimal): ",
  },

  {
    type: "list",
    name: "shape",
    message: "What shape would you like the logo to be?",
    choices: ["circle", "square", "triangle"],
  },
  {
    type: "input",
    name: "shapeColor",
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

async function init() {
  const response = await inquirer.prompt(userPrompts);
  console.log(response);

  // Create Logic to create SVG based on shape selected
  if (response.shape === "circle") {
    console.log("Circle Selected");
    let circleSVG = new CircleSVG(
      response.text,
      response.textColor,
      response.shape,
      response.shapeColor
    );
    let renderedSVG = circleSVG.render();
    console.log(renderedSVG);
    fs.writeFileSync("./distri/logo.svg", renderedSVG);
    console.log("Circle File Created");
  } else if (response.shape === "triangle") {
    let triangleSVG = new TriangleSVG(
      response.text,
      response.textColor,
      response.shape,
      response.shapeColor
    );
    let renderedSVG = triangleSVG.render();
    fs.writeFileSync("./distri/logo.svg", renderedSVG);
    console.log("Triangle File Created");
  } else if (response.shape === "square") {
    console.log("Square Selected");
    let squareSVG = new SquareSVG(
      response.text,
      response.textColor,
      response.shape,
      response.shapeColor
    );
    let renderedSVG = squareSVG.render();
    console.log(renderedSVG);
    fs.writeFileSync("./distri/logo.svg", renderedSVG);
    console.log("Square File Created");
  } else {
    console.log(
      "Error: Please pick shape. Re-run node index.js and follow prompts again"
    );
  }
}

init();
