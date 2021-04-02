
  # Tony's-Team-Profile-Generator
  ## Project link: https://github.com/Abarrera123/My-Team-Profile-Generator
  * [Description](#desription)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  # Description 
  ## What:
   This project will prompt the user to enter information about thier work team. The user will be asked to enter the employee's name, id, email, and role in the office. When the user respondes to the prompts about a single employee, the user will be prompted to add another employee. Once the user is done inputing data then the application will write an HTML document using this data.
  ## How: 
  This project works by using npm inquirer to prompt the user with a series of question. The users answers will create a class based on what role the user chose. For example if the user chose the Engineer role, then the data will be put into the Engineer class. The Employee class is used as an extension to all other classes used. The classes are pushed into array and as long as the user continues to add new member's this array will grow. Once the user decieds to not add any more members, the  HTML will be generated. The HTML file is generated using npm fs and using the code in the src/template.js. This template will write the header of the HTML. When the user adds a member to their team, the HTML code will be appened to the HTML header. This is executed with the htmlClass() function. Once the user completes their task of adding members then the bottomHTML() function will be executed to close the HTML file. The file can be found in the output folder.
  ## Why:
   This project was developed to help save time for an employer to generate a webpage that displays employess' basic information. 
  ## Technologies Used: 
  Node.js, npm jest, npm inquirer, Javascript, HTML, Bulma
  ## Purpose:
  This helps solve the problem of having static HTML pages. Before we would have to hard code the employee's information beforehand. With this application we don't need to know any of the users information and we don't need to know how many employees are on a team beforehand.
  # Installation:
    Once opening the application make sure to run npm i in the terminal. Also make sure your version of Node.js is up to date. Once you are done with that, just type 'node index.js' into the terminal. You will then be prompted to answer a series of questions. Once you are finished with the prompts, look in the output folder to find your HTML file. 
  # Usage:
  ## Video link on how to use: https://drive.google.com/file/d/13EgL6i4V0swCKohdEf7k9Xmkv9heImUr/view
 ![HTML Screenshot](example\profile-generatpr-html-screenshot.PNG)
  # Credits:
  ## Contributors: Antonio Barrera 
  ## Github Username: Abarrera123
  ## Github Link: https://github.com/Abarrera123
  # License: N/A
  