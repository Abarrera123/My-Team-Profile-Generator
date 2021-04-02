const inquirer = require('inquirer');
//const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const {htmlHeader, htmlClass, bottomHTML} = require('./src/template')

//creating a empty array to push our objects too
const teamMembers = [];
function initApp(){
    htmlHeader();
    addMember();
}
//prompting the user to get employee information
function addMember() {
    inquirer.prompt([{
        message: "Team member's name",
        name: 'name'
    },
    {
        type: 'list',
        message: "Enter team member's role",
        choices: [
            'Engineer',
            'Intern',
            'Manager'
        ],
        name:'role',
    },
    {
        message:"Enter team member's id",
        name:'id',
    },
    {
        message:"Enter team member's email",
        name:'email'
    }])
    //using a .then function to get information based on the employee role.
    .then(function({name, role, id, email}){
        let roleSpec = '';
        if(role === 'Engineer'){
            roleSpec = "Your engineer's Github profile link"; 
        }else if (role === 'Intern'){
            roleSpec = "The school your intern attends";
        }else if (role ==='Manager'){
            roleSpec = "Your manager's office number"
        }
        //continueing the prompt
        inquirer.prompt([{
            message:`Enter team member's ${roleSpec}`,
            name: 'roleSpecial',
        },
        {
            type: 'list',
            message:' Would you like to add more team members?',
            choices:[
                'yes',
                'no',
            ],
            name:'addTeamMember',
        }])
        //if any of the rolls are true then a new class will be created using the user input
        .then(function({roleSpecial, addTeamMember}){
            let newEmployee;
            if(role === 'Engineer'){
                newEmployee = new Engineer(name, id , email,roleSpecial);
            } else if (role === 'Intern'){
                newEmployee = new Intern(name, id, email, roleSpecial);
            }else {
                newEmployee = new Manager(name, id , email, roleSpecial);
            }
            //pushing the new object into the teamMembers array
            teamMembers.push(newEmployee);
            htmlClass(newEmployee)
            .then(function(){
                if(addTeamMember === 'yes'){
                    addMember();
                } else {
                    bottomHTML()
                }
            });
        });
    });
}

initApp();