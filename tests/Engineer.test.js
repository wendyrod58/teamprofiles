const Engineer = require('../lib/Engineer');
const engineer = new Engineer("John", "2", "john@gmail.com", "john58");

describe("engineer object testing", () => {
    test('checks if name is equal to John', () => {
        expect(engineer.getName()).toBe("John");
    });

    test('checks if ID is equal to 2', () => {
        expect(engineer.getId()).toBe("2");
    });

    test('checks if email is equal to john@gmail.com', () => {
        expect(engineer.getEmail()).toBe("john@gmail.com");
    });

    test('checks if GitHubUserName is equal to john58', () => {
        expect(engineer.getGitHub()).toBe("john58");
    });

})

