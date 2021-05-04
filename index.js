// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// include generateMarkdown.js
const writeToFile = require('./utils/generateMarkdown');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const promptUser = () => {
//const questions = [
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your Github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a short description of your project.',
        },
        {
            type: 'list', //Change input of this, options: 
            name: 'license',
            message: 'What kind of license should your project have?', 
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
        {
            type: 'input', //default to npm i
            name: 'instructions',
            message: 'How is this project installed?',
            default: 'npm i',
        },
        {
            type: 'input', //default to npm test
            name: 'test',
            message: 'How is this project tested?',
            default: 'npm test',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How should this project be used?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How can this project be contributed to?',
        },
    ]);
};

// TODO: Create a function to write README file
//function writeToFile(/*fileName, */data) {}    //need to add license badge


// TODO: Create a function to initialize app
const init = () => {
    promptUser()
      //.then((answers) => writeFileAsync('projectREADME.md', writeToFile(answers)))
      //.then(renderLicenseBadge(answer.license))
      .then((answers) => writeFileAsync('projectREADME.md', writeToFile(answers)))
      .then(() => console.log('Successfully wrote to projectREADME.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
