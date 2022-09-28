const inquirer = require("inquirer");

const init = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter team manager’s name.",
        name: "managerName",
      },
      {
        type: "input",
        message: "Please enter team manager’s employee ID.",
        name: "managerId",
      },
      {
        type: "input",
        message: "Please enter team manager’s email address.",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "Please enter team manager’s office number.",
        name: "managerOffice",
      },
    ])
    .then((response) => {
      console.log(response);
      menu();
    });
};

init();

const menu = () => {
  return inquirer
    .prompt([
      {
        type: "checkbox",
        message: "Select an option: ",
        name: "options",
        choices: ["Add an engineer", "Add an intern", "Finished"],
        validate: (answer) => {
          if (answer.length !== 1) {
            return "Please select exactly one option.";
          }
          return true;
        },
      },
    ])
    .then((response) => {
      if (response.options == "Add an engineer") {
        promptEngineer();
      }
    });
};

const promptEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Type something in",
        name: "promptEngineer",
      },
    ])
    .then((response) => {
      menu();
    });
};