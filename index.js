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

// Function to Create Logo.svg once user answers prompts
function createFile(fileName, data) {
  try {
    let filePath = path.join(__dirname, "/distri", fileName);
    fs.writeFileSync(filePath, data);
    console.log("Generated logo.svg. Check distri folder.");
  } catch (error) {
    console.log("Error generating file");
    console.error(error);
  }
}

async function init() {
  const response = await inquirer.prompt(userPrompts);

  // Conditional Statements to check if valid text input
  if (response.text.length > 0 && response.text.length < 4) {
    console.log("Valid Text Input");
  } else {
    console.log(
      "ERROR: Invalid Text Input. Please input up to a minimum 1 character (i.e. 'A') and maximum 3 characters (i.e. 'ABC')"
    );
    return;
  }

  // Logic to Create Circle File
  if (response.shape === "circle") {
    console.log("Circle Selected");
    let circleSVG = new CircleSVG(
      response.text,
      response.textColor,
      response.shape,
      response.shapeColor
    );
    let renderedSVG = circleSVG.render();
    createFile("logo.svg", renderedSVG);

    // Logic to Create Triangle File
  } else if (response.shape === "triangle") {
    let triangleSVG = new TriangleSVG(
      response.text,
      response.textColor,
      response.shape,
      response.shapeColor
    );
    let renderedSVG = triangleSVG.render();
    createFile("logo.svg", renderedSVG);

    // Logic to Create Square File
  } else if (response.shape === "square") {
    console.log("Square Selected");
    let squareSVG = new SquareSVG(
      response.text,
      response.textColor,
      response.shape,
      response.shapeColor
    );
    let renderedSVG = squareSVG.render();
    createFile("logo.svg", renderedSVG);
  } else {
    console.log(
      "Error: Please pick shape. Re-run node index.js and follow prompts again"
    );
  }
}

init();
