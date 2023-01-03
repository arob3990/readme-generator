// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


inquirer
    .prompt([
        {
            type: "input",
            name: "projectTitle",
            message:"What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Please type a description of your project"
        },
        {
            type: "input",
            name: "installationInstructions",
            message: "Please enter in the installation instructions for your project"
        },
        {
            type: "input",
            name: "usageInformation",
            message: "Please indicate how your project is intended to be used"
        },
        {
            type: "input",
            name: "contributionGuidelines",
            message: "Please enter in the contribution guidelines"
        },
        {
            type: "input",
            name: "testInstructions",
            message: "Please enter in the test instructions"
        },
        {
            type: "list",
            name: "license",
            message: "Please indicate the license type for your project",
            choices: ["Apache_2.0", "GPLv3", "MIT"]
        },
        {
            type: "input",
            name: "userRepo",
            message: "Please enter in your github user name"
        },
        {
            type: "input",
            name: "userEmail",
            message: "Please enter in your email address"
        }
    ])
    .then((answers) => {
        console.log(answers)
       
        writeAnswersToFile(answers);
      })




const writeAnswersToFile= (userAnswers)=>{
    const initialData = 
    `# ${userAnswers.projectTitle} 
    \n !{License: ${userAnswers.license}](https://img.shields.io/badge/License-${userAnswers.license}-blue.svg)
    \n## Description
    \n ${userAnswers.description} 
    \n## Installation 
    \n ${userAnswers.installationInstructions} 
    \n## Usage
    \n ${userAnswers.usageInformation}
    \n## Contributing
    \n ${userAnswers.contributingGuidelines}
    \n## Tests
    \n ${userAnswers.testInstructions}
    \n## License
    \n ${userAnswers.license}
    \n## Questions
    \n Please find a link to my Github profile at https://github.com/${userAnswers.userRepo}/
    \n For any questions, please email me at ${userAnswers.userEmail}`
    
    fs.writeFile(
        `${userAnswers.projectTitle}.md`, 
        initialData, 
    (error)=>error?console.log(error):console.log("success")
    )
}


