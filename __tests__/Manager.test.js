// require Manager constructor 
const Manager = require('../lib/Manager');

// creates sample Manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Jimmy', 5, 'jimmymhuang@gmail', 7);
    // verifies the office number is in fact a number
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// retrieves role from getRole function
test('gets role of employee', () => {
    const manager = new Manager('Jimmy', 5, 'jimmymhuang@gmail.com');
    // verifies role selected is Manager
    expect(manager.getRole()).toEqual("Manager");
}); 