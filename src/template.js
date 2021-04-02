//this file holds the scafold and logic to write the html. Its split ib three sections.
const fs = require('fs');
//header of the html page
function htmlHeader() {
const htmlHeader = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Member-Profile-Generator</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
</head>
<body>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item">
                Home
              </a>
            </div>
    </nav>`;
    //write the file write when the function is called
    fs.writeFile('./output/team.html', htmlHeader, (err)=>
    err ? console.log(err) : console.log() )
}

function htmlClass(employee){
    return new Promise(function(resolve, reject){
        const name = employee.getName();
        const id = employee.getId();
        const email = employee.getEmail();
        const role = employee.getRole();
        let card =''
        if (role === 'Engineer'){
            const gitHub = employee.getGithub();
            card =`
            <div class="card" id='engineer'>
            <div class="card-content">
              <div class="media">
                  <!-- img of the employee role  -->
                <div class="media-left">
                  <figure class="image is-48x48">
                    <i class="fas fa-laptop"></i>
                  </figure>
                </div>
                <div class="media-content" >
                  <p class="title is-4" id='name'>Engineer: ${name}</p>
                  <p class="subtitle is-6" id=email>Email: <a> ${email}</a></p>
                  <p class="subtitle is-6" id=id>Employee ID: ${id}</p>
                  <p class="subtitle is-6" id=github>Github: <a href =${gitHub}> ${gitHub}</a></p>
                </div>
              </div>
            </div>
          </div>`
        } else if (role ==='Intern') {
            const school = employee.getSchool();
            card = `
            <div class="card" id='intern'>
        <div class="card-content">
          <div class="media">
              <!-- img of the employee role  -->
            <div class="media-left">
              <figure class="image is-48x48">
                <i class="fas fa-glasses"></i>
            </figure>
            </div>
            <div class="media-content" >
              <p class="title is-4" id='name'>Intern: ${name}</p>
              <p class="subtitle is-6" id=email>Email: <a href = ${email}> ${email}</a></p>
              <p class="subtitle is-6" id=id>Employee ID: ${id}</p>
              <p class="subtitle is-6" id=school>School: ${school}</p>
            </div>
          </div>
        </div>
      </div>`;
        } else {
            const officeNum = employee.getOfficeNumber();
            card = `
            <div class="card" id='manager'>
            <div class="card-content">
              <div class="media">
                  <!-- img of the employee role  -->
                <div class="media-left">
                  <figure class="image is-48x48">
                    <i class="fas fa-coffee"></i>
                  </figure>
                </div>
                <div class="media-content" >
                  <p class="title is-4" id='name'>Manager: ${name}</p>
                  <p class="subtitle is-6" id=email>Email: <a href = ${email}> ${email}</a></p>
                  <p class="subtitle is-6" id=id>Employee ID: ${id}</p>
                  <p class="subtitle is-6" id=office-num>${officeNum}</p>
                </div>
              </div>
            </div>`;
        }
        fs.appendFile('./output/team.html', card, function(err){
            if(err){
                return reject(err);
            };
            return resolve();
            }); 
        });    
};
          

function bottomHTML() {
    const htlmbBttom = `</div>
    </body>
    </html>`;

    fs.appendFile('./output/team.html', htlmbBttom, (err)=>
    err ? console.log(err) : console.log('The team has been assembled.'));
}
    
    
module.exports = {htmlHeader, htmlClass, bottomHTML};