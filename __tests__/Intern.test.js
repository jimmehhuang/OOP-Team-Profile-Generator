// requires Intern constructor 
const Intern = require('../lib/Intern');

// creates sample intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Jimmy', 5, 'jimmymhuang@gmail', 'UT Austin');
    // verifies school entered is in a valid string format
    expect(intern.school) .toEqual(expect.any(String));
});

// retrieves school from getSchool function
test('gets employee school', () => {
    const intern = new Intern('Jimmy', 5, 'jimmymhuang@gmail', 'UT Austin');
    // verifies string contains school name
    expect(intern.getSchool()).toEqual(
        expect.stringContaining(intern.school.toString())
    );
});

// retrieves role from getRole function
test('gets role of employee', () => {
    const intern = new Intern('Jimmy', 5, 'jimmymhuang@gmail.com', 'UT Austin');
    // verifies role is Intern
    expect(intern.getRole()).toEqual("Intern");
}); 