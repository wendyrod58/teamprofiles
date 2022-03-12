const Employee = require("./Employee");

//Child CLass 
class Manager extends Employee {
    // name,id, email -- parent 
    // officeNumber - child class
    constructor(name, id, email, officeNumber) {
        //call it from parent 
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        //getRole() // Overridden to return 'Manager'
        return 'Manager'; 
    }

    getOfficeNumber(){
        return this.officeNumber; 
    }
}
module.exports = Manager; 