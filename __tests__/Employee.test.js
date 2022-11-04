// require Employee constructor
const Employee = require('../lib/Employee');

// create employee object for test
test('creates an employee object', () => {
    const employee = new Employee('Jimmy', 5, 'jimmymhuang@gmail.com');
    // verifies valid inputs for name, id, and email
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// retrieves name from the getName function 
test('gets employee name', () => {
    const employee = new Employee('Jimmy', 5, 'jimmymhuang@gmail.com');
    // verifies string entered
    expect(employee.getName()).toEqual(expect.any(String));
});

// retrieves id from getId function 
test('gets employee ID', () => {
    const employee = new Employee('Jimmy', 5, 'jimmymhuang@gmail.com');
    // verifies valid number entered for ID
    expect(employee.getId()).toEqual(expect.any(Number));
});

// retrieves email from getEmail function
test('gets employee email', () => {
    const employee = new Employee('Jimmy', 5, 'jimmymhuang@gmail.com');
    // verifies email is valid string from the email parameter in employee object
    expect(employee.getEmail()).toEqual(
        expect.stringContaining(
            employee.email.toString()
        )
    );
});

// retrieves role from getRole function
test('gets role of employee', () => {
    const employee = new Employee('Jimmy', 5, 'jimmymhuang@gmail.com');
    // role is Employee by default
    expect(employee.getRole()).toEqual("Employee");
}); 