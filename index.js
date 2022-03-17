//Require all packages 
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require('fs');


const generatePage = (allTeamMembers) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="./dist/style.css">
      <title>Team Profiles</title>
    </head>
  
    <body>
    <header class="jumbotron">
    <h1>My Team</h1>
</header>

      <div class="card-group">
      ${allTeamMembers.map(member => {
        if (member.getRole() === "Engineer") {
            return `
            <div class="card">
            <div class="card-body">
            <p>ID: ${member.getName()}</p>
                <p>Name: ${member.getId()}</p>
                <p>Email: ${member.getEmail()}</p>
                <p>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
                <p>Github Username: <a href="https://github.com/${member.getGitHub()}" target="_blank">${member.getGitHub()}</a></p>
                </div> 
                </div>`;
        } else if (member.getRole() === "Intern") {
            return `
            <div class="card">
            <div class="card-body">
                <p>ID: ${member.getName()}</p>
                <p>Name: ${member.getId()}</p>
                <p>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
                <p>School Name: ${member.getSchool()}</p>
                </div> 
        </div>`;
        } else if (member.getRole() === "Manager") {
            return `
            <div class="card">
            <div class="card-body">
                <p>ID: ${member.getName()}</p>
                <p>Name: ${member.getId()}</p>
                <p>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
                <p>Office Number: ${member.getOfficeNumber()}</p>
                </div>
                </div>`;
        }
    })}
    </div>
    </body>
    </html>
    `;
}

// bootstrap instructions

{/* <div class="card-group">

<div class="card">
    <div class="card-body"> */}
{/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> */}

// function teamProfiles (


const managerQuestions = [{
    name: "managerName",
    type: 'input',
    message: "Please enter Manager Name"
},
{
    name: "managerEmail",
    type: 'input',
    message: "Please enter Manager Email: "
},
{
    name: "managerID",
    type: 'input',
    message: "Please enter Manager ID"
},
{
    name: "officeNumber",
    type: 'input',
    message: "Please enter Manager's Office Number: "
}
];

const internQuestions = [{
    name: "internName",
    type: 'input',
    message: "Please enter Intern's Name"
},
{
    name: "email",
    type: 'input',
    message: "Please enter Intern's Email: "
},
{
    name: "internID",
    type: 'input',
    message: "Please enter Intern's ID"
},
{
    name: "school",
    type: 'input',
    message: "Please enter Intern's School/University: "
}
];

const EngineerQuestions = [{
    name: "engineerName",
    type: 'input',
    message: "Please enter Engineer's Name"
},
{
    name: "email",
    type: 'input',
    message: "Please enter Engineer's Email: "
},
{
    name: "engineerID",
    type: 'input',
    message: "Please enter Engineer's ID"
},
{
    name: "GitHub",
    type: 'input',
    message: "Please enter Engineer's GitHub: "
}
];

let allTeamMembers = [];




function init() {
    console.log("/n Welcome to team Generator /n");
    inquirer.prompt(managerQuestions)
        .then(answers => {
            // console.log("manager Info", answers);
            //Convert into a Manager Class object 
            const sample = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.officeNumber);

            //add it to the array 
            allTeamMembers.push(sample);

            //Ask again 
            options();

            //print all members 
            console.log(allTeamMembers);
        })
};

function askInternQuestions() {
    inquirer.prompt(internQuestions)
        .then(answers => {
            // console.log("manager Info", answers);
            //Convert into a Manager Class object 
            const sample = new Intern(answers.internName, answers.internID, answers.email, answers.school);
            //add it to the array 
            allTeamMembers.push(sample);

            //print all members 
            console.log(allTeamMembers);

            //ask the question 
            options();

        })
};

function askEngineerQuestions() {
    inquirer.prompt(EngineerQuestions)
        .then(answers => {
            const sample = new Engineer(answers.engineerName, answers.engineerID, answers.email, answers.GitHub);
            allTeamMembers.push(sample);

            //print all members 
            console.log(allTeamMembers);

            //ask the question 
            options();

        })
};

function options() {
    inquirer.prompt([{
        name: "myoptions",
        message: "would you like to add a member? ",
        choices: ["Intern", "Engineer", "No , thank you"],
        type: 'list'
    }])
        .then(answers => {
            console.log("MY options is ", answers);
            if (answers.myoptions === "Intern") {
                askInternQuestions();
            } else if (answers.myoptions === "Engineer") {
                askEngineerQuestions(); //refern intern Function 
            } else {
                console.log("Generating  Team  HTML ...");
                fs.writeFile('./dist/index.html', generatePage(allTeamMembers), err => {
                    if (err) throw new Error(err);
                    console.log("Bye!!!")
                })
            }
        })
};



init(); 
