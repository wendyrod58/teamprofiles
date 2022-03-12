const Manager = require('../lib/Manager');
const manager = new Manager("John", "2", "john@gmail.com", "123456789");

describe("intern object testing", () => {
    test('checks if name is equal to John', () => {
        expect(manager.getName()).toBe("John");
    });

    test('checks if ID is equal to 2', () => {
        expect(manager.getId()).toBe("2");
    });

    test('checks if email is equal to john@gmail.com', () => {
        expect(manager.getEmail()).toBe("john@gmail.com");
    });

    test('checks if office number is equal to 123456789', () => {
        expect(manager.getOfficeNumber()).toBe("123456789");
    });

})

