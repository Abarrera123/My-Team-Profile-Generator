const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    it('Creates a gitHub link', () => {
        const testInput = 'github.com';
        const employee = new Engineer('name', 123, 'email@email.com', testInput);
        expect(employee.github).toBe(testInput);
    });
    describe('getGithub()', () => {
        it("Get's github from getGithub() function.", () => {
            const testInput = 'github.com';
            const employee = new Engineer('name', 123, 'email@email.com', testInput);
            expect(employee.getGithub()).toBe(testInput);
        });
    });
    describe('getRole()', () => {
        it("Get's role from getRole() function.", () => {
            const testInput = 'Engineer';
            const employee = new Engineer('name', 123, 'email@email.com', 'github');
            expect(employee.getRole()).toBe(testInput);
        });
    });  
});