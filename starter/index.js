const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "title of your project?"
    },




];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, error => {
        if (error) {
            throw error;
        } else {
            console.log("File created successfully")
        }
    });
}

// function to initialize program
function init() {

    inquirer.prompt(questions).then(content => {

        const answers = generateMarkdown(content)
        writeToFile('README.md', answers)

    });

}

// function call to initialize program
init();
