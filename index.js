const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown");

console.log(
    `\n
    -----------------------------------
    \n
    ========README.MD GENERATOR========     
    \n
    -----------------------------------
    \n
    `
)

const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your primary email?"
    },
    {
        type: "input",
        name: "project",
        message: "A name for the project?"
    },
    {
        type: "input",
        name: "description",
        message: "Input a description for your project: "
    },
    {
        type: "input",
        name: "installation",
        message: "Explain how to install your app: "
    },
    {
        type: "input",
        name: "usage",
        message: "Insert the usage of your project, how does it work? "
    },
    {
        type: "input",
        name: "license",
        message: "Insert the licenses used here for reference: "
    },
    {
        type: "input",
        name: "credit",
        message: "Credit those who contributed to the project: "
    },
    {
        type: "input",
        name: "contributing",
        message: "Add some guidelines for those who want to continue contributing to your project: "
    },
    {
        type: "input",
        name: "tests",
        message: "Explain how your tests were implemented to this project: "
    },
    {
        type: "input",
        name: "questions",
        message: "Any additional questions you'd like to add? "
    }
];

function writeToFile(response, userObj) {
    var markdown = generateMarkdown(response, userObj)
    fs.writeFile("README.md", markdown, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
}

function init() {
    inquirer.prompt(questions).then(function (data) {
        var response = data;
        const usernameUrl = `https://api.github.com/users/${data.username}`
        axios.get(usernameUrl).then(function (res) {
            writeToFile(response, res.data)
        }).catch(function (err) {
            console.log(err);
        }).then(function () {
            console.log("Thank you for using README.MD GENERATOR");
        });
    })
}

init();
