const Employee = require("./Employee");

//Child CLass 
class Engineer extends Employee {
    // name,id, email -- parent 
    // GitHub username - child class
    constructor(name, id, email, GitHub) {
        //call it from parent 
        super(name, id, email);
        this.GitHub = GitHub;
    }

    getGitHub() {
        return this.GitHub;
    }
}
module.exports = Engineer; 