// imports and extends Employee constructor 
const Employee = require('./Employee');
// requires name, id, email, and school name
class Intern extends Employee  {
    constructor (name, id, email, school) {
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
// export
module.exports = Intern; 