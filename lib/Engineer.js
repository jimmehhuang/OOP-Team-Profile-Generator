// imports and extends Employee constructor
const Employee = require("./Employee");
// class requires name, id, email, and github username
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github; 
    }
    // returning github from input 
    getGithub () {
        return this.github;
    }
     // override employee role to engineer
    getRole () {
        return "Engineer";
    }
}
// export
module.exports = Engineer; 