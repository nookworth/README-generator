const inquirer = require("inquirer");
const fs = require("fs");
let readmeName;

const init = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the name of your project.",
        name: "projectName",
      },
    ])
    .then((response) => {
      readmeName = response.projectName.toUpperCase();

      fs.writeFile(
        `${readmeName}.md`,
        "# Table of Contents\n1. DESCRIPTION\n2. INSTALLATION\n3. USAGE\n4. CONTRIBUTING\n5. TESTS\n6. LICENSE\n7. QUESTIONS\n\n\n",
        (error, data) => (error ? console.error(error) : console.log(data))
      );

      questions();
    });
};

init();

const questions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter a description for your project.",
        name: "description",
      },
      {
        type: "input",
        message: "Please enter installation instructions for your project.",
        name: "install",
      },
      {
        type: "input",
        message: "Please enter usage information for your project.",
        name: "usage",
      },
      {
        type: "input",
        message: "Please enter contribution guidelines for your project.",
        name: "contribution",
      },
      {
        type: "input",
        message: "Please enter test instructions for your project.",
        name: "testing",
      },
    ])
    .then((response) => {
      fs.appendFile(
        `${readmeName}.md`,
        `## DESCRIPTION\n${response.description}\n\n\n## INSTALLATION\n${response.install}\n\n\n## USAGE\n${response.usage}\n\n\n## CONTRIBUTING\n${response.contribution}\n\n\n## TESTS\n${response.testing}\n\n\n`,
        (error, data) => (error ? console.error(error) : console.log(data))
      );

      license();
    });
};

const license = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "Please select a license for your project.",
        name: "license",
        choices: [
          "Apache License 2.0",
          "MIT",
          "Mozilla Public License 2.0",
          "Open Software License 3.0",
        ],
      },
    ])
    .then((response) => {
      fs.appendFile(
        `${readmeName}.md`,
        `## LICENSE\n${response.license}\n\n\n`,
        (error, data) => (error ? console.error(error) : console.log(data))
      );

      contact();
    });
};

const contact = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter your Github username",
        name: "github",
      },
      {
        type: "input",
        message: "Please enter your email address.",
        name: "email",
      },
    ])
    .then((response) => {
      fs.appendFile(
        `${readmeName}.md`,
        `## QUESTIONS\nhttps://github.com/${response.github}\n\n${response.email} 
          \n\n\n`,
        (error, data) => (error ? console.error(error) : console.log(data))
      );
    });
};
