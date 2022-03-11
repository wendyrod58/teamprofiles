//Require all packages 
const inquirer = require("inquirer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const mangerQuestions = [{
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
]

let allTeamMembers = [];

function init() {
    console.log("/n Welcome to team Generator /n ***************");
    inquirer.prompt(mangerQuestions)
        .then(answers => {
            // console.log("manger Info", answers);
            //Convert into a Manager Class object 
            const sample = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.officeNumber);

            //add it to the array 
            allTeamMembers.push(sample);

            //Ask again 
            options(); 

            //print all members 
            console.log(allTeamMembers);
        })
}
function options(){
    inquirer.prompt([{
        name:"myoptions", 
        message: "would you like to adda member? ", 
        choices:["Intern", "Engineer", "No , thank you"], 
        type:'list'
    }])
        .then(answers => {
            console.log("MY options is ", answers); 
            if( answers.myoptions === "Intern"){
                askInternQuestions(); 
            }else  if( answers.myoptions === "Engineer"){
                askEngineerQuestions(); //refern intern Function 
            }else { 
                buildHTMLPage(); 
            }
        })
}


function buildHTMLPage(){
    console.log("Generate TEmplate HTML"); 
    //fs.writefile 

    console.log("Bye!!!")
}

function askInternQuestions() {
    inquirer.prompt(internQuestions)
        .then(answers => {
            // console.log("manger Info", answers);
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

init(); 
