// imports and extends Employee constructor 
const Employee = require('./Employee');
// requires name, id, email, and office number inputs
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); 
        this.officeNumber = officeNumber; 
    }
    // override employee role to manager 
    getRole () {
        return "Manager";
    }
}
// export
module.exports = Manager; 