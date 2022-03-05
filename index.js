//Require all packages 
const inquirer = require("inquirer");

const mangerQuestions = [{
    name: "managerName",
    type: 'input',
    message: "Please enter Manager Name"
},
{
    name: "mangerEmail",
    type: 'input',
    message: "Please enter Manager Email: "
},
{
    name: "mangerID",
    type: 'input',
    message: "Please enter Manager ID"
},
{
    name: "officeNumber",
    type: 'input',
    message: "Please enter Manager's Office Number: "
}
]

inquirer.prompt(mangerQuestions)
.then(answers => {
    console.log("manger Info", answers); 
    //Convert into a Manager Class object 
    //const sample = new Manager("Namita", 2, "test@gmail.com"); 
 
})