// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }





// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseBadge = "";
  switch (license) {
    case "Apache":
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
      break;
    case "MIT":
      licenseBadge = "[![License](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      break;
    case "No License":
      licenseBadge = "No License";
      break;
    default:
      licenseBadge;
  }
  return licenseBadge;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

   ${renderLicenseSection(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents

  - [License](#license)
  - [Description](#description)
  - [Installation](#install)
  - [Usage](#usage)
  - [Usage](#test)
  - [Contributors](#contribute)
  - [Questions](#github)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Testing
  ${data.test}

  ## Contributors
  ${data.contribute}

  Github: [${data.github}](http://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
