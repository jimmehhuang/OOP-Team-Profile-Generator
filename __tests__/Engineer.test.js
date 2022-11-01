// requires Engineer constructor 
const Engineer = require('../lib/Engineer');

// creates sample engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Jimmy', 005, 'jimmymhuang@gmail', 'jimmehhuang');
    // verifies String is entered
    expect(engineer.github) .toEqual(expect.any(String));
});

// retrieves github username from getGithub function
test('gets engineer github value', () => {
    const engineer = new Engineer('Jimmy', 005, 'jimmymhuang@gmail', 'jimmehhuang');
    // verifies string contains the github username
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// retrieves role from getRole function 
test('gets role of employee', () => {
    const engineer = new Engineer('Jimmy', 005, 'jimmymhuang@gmail', 'jimmehhuang');
    // verifies role is Engineer
    expect(engineer.getRole()).toEqual("Engineer");
});