const Intern = require('../lib/Intern');

describe('Intern class', () => {
    it('Creates a school value', () => {
        const testInput = 'school';
        const employee = new Intern('name', 123, 'email@email.com', testInput);
        expect(employee.school).toBe(testInput);
    });
    describe('getSchool()', () => {
        it("Get's school from getSchool() function.", () => {
            const testInput = 'school';
            const employee = new Intern('name', 123, 'email@email.com', testInput);
            expect(employee.getSchool()).toBe(testInput);
        });
    });
    describe('getRole()', () => {
        it("Get's role from getRole() function.", () => {
            const testInput = 'Intern';
            const employee = new Intern('name', 123, 'email@email.com', 'github');
            expect(employee.getRole()).toBe(testInput);
        });
    });  
});