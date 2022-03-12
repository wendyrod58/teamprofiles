const Employee = require("./Employee");

//Child CLass 
class Engineer extends Employee {
    // name,id, email -- parent 
    // GitHub username - child class
    constructor(name, id, email, GitHubUserName) {
        //call it from parent 
        super(name, id, email);
        this.GitHubUserName = GitHubUserName;
    }

    getGitHubUserName() {
        return this.GitHubUserName;
    }
}
module.exports = Engineer; 