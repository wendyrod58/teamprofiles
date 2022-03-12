const Intern = require('../lib/intern');
const intern = new Intern("John", "2", "john@gmail.com", "Harvard" );

describe("intern object testing", () => {
    test('checks if name is equal to John', () => {
        expect(intern.getName()).toBe("John");
    });

    test('checks if ID is equal to 2', () => {
        expect(intern.getId()).toBe("2");
    });

    test('checks if email is equal to john@gmail.com', () => {
        expect(intern.getEmail()).toBe("john@gmail.com");
    });

    test('checks if role is equal to Intern', () => {
        expect(intern.getRole()).toBe("Intern");
    });

    test('checks if school is equal to Harvard', () => {
        expect(intern.getSchool()).toBe("Harvard");
    });

})

