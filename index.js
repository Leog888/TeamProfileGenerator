const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./generateHTML');
const intern = require('./Intern');
const engineer = require('./Engineer');
const manager = require('./Manager.js')



const managerQuestions = [
    {
      name: 'managerName',
      type: 'input',
      message: "What is the manager's name?",
      required: 'true'
    },
    {
      name: 'managerId',
      type: 'input',
      message: "What is the manager's employee ID?",
      required: 'true'
    },
    {
      name: 'managerEmail',
      type: 'input',
      message: "What is the manager's email address?",
      required: 'true'
    },
    {
      name: 'managerOffice',
      type: 'input',
      message: "What is the manager's office number?",
      required: 'true'
    },
  ]

const nextChoice = [
{
  name: 'nextChoice',
  type: 'list',
  choices: ["Engineer", "Intern", "I'm done!"],
  message: 'What type of employee do you want to add?',
  required: 'true'
}
]

const engineerQuestions = [
{
  name: 'name',
  type: 'input',
  message: "What is the engineer's name?",
  required: 'true'
},
{
  name: 'id',
  type: 'input',
  message: "What is the engineer's employee ID?",
  required: 'true'
},
{
  name: 'email',
  type: 'input',
  message: "What is the engineer's email address?",
  required: 'true'
},
{
  name: 'github',
  type: 'input',
  message: "What is the engineer's GitHub username?",
  required: 'true'
},
]

const internQuestions = [
{
  name: 'name',
  type: 'input',
  message: "What is the intern's name?",
  required: 'true'
},
{
  name: 'id',
  type: 'input',
  message: "What is the intern's employee ID?",
  required: 'true'
},
{
  name: 'email',
  type: 'input',
  message: "What is the intern's email address?",
  required: 'true'
},
{
  name: 'school',
  type: 'input',
  message: "What is the intern's school?",
  required: 'true'
},
]