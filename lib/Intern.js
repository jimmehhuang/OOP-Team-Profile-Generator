// imports and extends Employee constructor 
const Employee = require('./Employee');

class Intern extends Employee  {
    constructor (name, id, email, school) {
        // calling employee constructor
        super (name, id, email); 

        this.school = school; 
    }

    // returning school from input 
    getSchool () {
        return this.school;
    }

    // override employee role to intern
    getRole () {
        return "Intern";
    }
}

// to be exported 
module.exports = Intern; 