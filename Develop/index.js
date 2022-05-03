// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project:",
    },
    {
      type: "input",
      name: "description",
      message: "Enter the description of your project:",
    },
    {
      type: "input",
      name: "install",
      message: "Please enter installation instructions for your project:",
    },
    {
      type: "input",
      name: "usage",
      message: "Please enter the usage information:",
    },
    {
      type: "list",
      message: "Please choose the project license:",
      choices: ["Apache", "MIT", "No license"],
      name: "license",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
    },
    {
      type: "input",
      name: "contribute",
      message: "Please enter the name of contributor:",
    },
  ])
  // TODO: Create a function to write README file
  .then((data) => {
    const fileName = "./test-README.md";
    fs.writeFileSync(fileName, generateMarkdown(data));
  });



// // TODO: Create a function to initialize app
// function init() {}


// Function call to initialize app
// init();
