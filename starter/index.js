//  install npm packages 
// npm install inquirer
// npm install fs

const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Title of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Brief description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions for your project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage instructions for your project:',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Your collaborators, if any, provide links: example : Niwantha,https://github.com/niwantha33',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache', 'GPL', 'BSD'],
    },
    {
        type: 'input',
        name: 'features',
        message: 'Provide information about features of your project:',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Provide information about how to contribute to your project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write tests for your application:',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    }
];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, error => {
        if (error) {
            // I/O error 
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
        // create the file at main folder
        const filePath = path.join('../output', 'README.md')
        // call writeToFile function
        writeToFile(filePath, answers)
    });
}

// function call to initialize program
init();
