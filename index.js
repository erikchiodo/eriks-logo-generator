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
    name: "text_color",
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
    name: "shape_color",
    message:
      "What shape color would you like? (enter keyword or hexadecimal): ",
  },
];

function init() {
  inquirer.prompt(userPrompts).then((userResponses) => {
    console.log(userResponses);
  });
}

init();
