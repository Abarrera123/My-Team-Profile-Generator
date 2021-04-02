const Manager = require('../lib/Manager');

describe('Manager class', () => {
    it('Creates an office number value', () => {
        const testInput = 456;
        const employee = new Manager('name', 123, 'email@email.com', testInput);
        expect(employee.officeNumber).toBe(testInput);
    });
    describe('getOfficeNumber()', () => {
        it("Get's office number from getOfficeNumber() function.", () => {
            const testInput = 456;
            const employee = new Manager('name', 123, 'email@email.com', testInput);
            expect(employee.getOfficeNumber()).toBe(testInput);
        });
    });
    describe('getRole()', () => {
        it("Get's role from getRole() function.", () => {
            const testInput = 'Manager';
            const employee = new Manager('name', 123, 'email@email.com', 'github');
            expect(employee.getRole()).toBe(testInput);
        });
    });  
});