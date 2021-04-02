const Employee = require('../lib/Employee');

describe('Employee class', () => {
    it('Creates a new name', () => {
        const name = 'Tony';
        const employee = new Employee(name);
        expect(employee.name).toBe(name);
    });
    it('Creates a new ID', () => {
        const testInput = 123;
        const employee = new Employee('tony',testInput );
        expect(employee.id).toBe(testInput );
    });
    it('Creates a new ID', () => {
        const testInput  = '123@123.com';
        const employee = new Employee('tony', 123, testInput);
        expect(employee.email).toBe(testInput);
    });
    it('Creates a new role', () => {
        const testInput= 'Employee';
        const employee = new Employee('tony', 123, '123@123.com', testInput);
        expect(employee.role).toBe(testInput);
    });
    describe('getName()', () => {
        it("Get's name from getName() function.", () => {
            const testInput = 'tony';
            const employee = new Employee(testInput);
            expect(employee.getName()).toBe(testInput);
        });
    });
    describe('getId()', () => {
        it("Get's id from getId() function.", () => {
            const testInput = 123;
            const employee = new Employee('tony', testInput);
            expect(employee.getId()).toBe(testInput);
        });
    });
    describe('getEmail()', () => {
        it("Get's email from getEmail() function.", () => {
            const testInput = '123@123.com';
            const employee = new Employee('tony', 123, testInput);
            expect(employee.getEmail()).toBe(testInput);
        });
    });
    describe('getRole()', () => {
        it("Get's employee role from getRole() function.", () => {
            const testInput = 'Employee';
            const employee = new Employee('tony', 123, '123@123.com', testInput);
            expect(employee.getRole()).toBe(testInput);
        });
    });
});