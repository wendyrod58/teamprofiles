const Employee = require('../lib/Employee');
const employee = new Employee("John", "2", "john@gmail.com");

describe("employee object testing", () => {
    test('checks if name is equal to John', () => {
        expect(employee.getName()).toBe("John");
    });

    test('checks if ID is equal to 2', () => {
        expect(employee.getId()).toBe("2");
    });

    test('checks if email is equal to john@gmail.com', () => {
        expect(employee.getEmail()).toBe("john@gmail.com");
    });

    test('checks if role is equal to Employee', () => {
        expect(employee.getRole()).toBe("Employee");
    });

})

