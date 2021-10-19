const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const Manager = require('../lib/manager');

class Team {
  constructor(){
    this.manager = undefined;
    this.engineers = [],
    this.interns = []
  }
  setManager = function(managerObject){
    if (managerObject instanceof Manager){
      (this.manager) = managerObject;
    } else {
      throw new Error('Please make sure it is a console of the Engineer class!')
    }
  }
  addEngineer = function(engineer){
    if (engineer instanceof Engineer){
      (this.engineers).push(engineer)
    } else {
      throw new Error('Please make sure it is a console of the Engineer class!')
    }
  }
  addIntern = function(intern){
    if (intern instanceof Intern){
      (this.interns).push(intern)
    } else {
      throw new Error('Please make sure it is a console of the Engineer class!')
    }
  }
}

module.exports = Team;