const Employee = require("./Employee");

//Child CLass 
class Intern extends Employee {
    // name,id, email -- parent 
    // school - child class
    constructor(name, id, email, school) {
        //call it from parent 
        super(name, id, email);
        this.school = school;
    }

    getRole() {

        return 'Intern';
    }

    getSchool() {
        return this.school;
    }

}
module.exports = Intern; 