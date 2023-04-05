//  List packages needed for this application
const iquirer =require('inquirer');
const generateMarkdown = require('.utils/generateMarkdown.js');

//  Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message:'What is the title fo your project?',
        validate: titleInput =>{
            if (titleInput) {
                return true;
            }
            else{
                console.log('Please enter the title of your project.');
                return false:

            }    
            }
        },

        {
        type: 'input'
        name: 'Add a description for your project',
        name: 'description',
        validate: (descriptionInput) => {
          if (descriptionInput) {
            return true;
          } 
          else {
            console.log('Please enter a description for your project.');
            return false;
          }
        }
      },


      {
        // This question is a list so the user can choose between deferent type of license
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['Apache License 2.0', 'MIT License','GNU General Public License v3.0','Mozilla Public License 2.0','None']
      },

      {
        type: 'input',
        name: 'installation',
        message: 'Please state what technologies must be installed for your project.',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter technologies that need to be installed.');
                return false;
            }
        }
    },

      {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions for use.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter your use instructions!');
                return false;
            }
        }

    },
    
       {
        type: 'input',
        message: 'How do we test your application?',
        name: 'tests',
        validate: (testsInput) => {
          if (testsInput) {
            return true;
          } else {
            console.log('Tell us how to test your application.');
            return false;
          }
        },

        {
            type: 'input',
            name: 'contribute',
            message: 'Who contributed to this project?',
            validate: (contributerInput) => {
                if (contributerInput) {
                    return true;
                } else {
                    console.log('Please enter contributers');
                    return false;
                }
            }
        },{
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'Git',
            validate: (GitHubInput) => {
              if (GitHubInput) {
                 return true 
                } else { console.log('Enter your GitHub username.');
                return false;
              }
            }
          },
          {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
            validate: (emailInput) => {
              if (emailInput) {
                 return true 
                } else { console.log('Enter your email address to receive questions about the projecy');
                return false;
              }
            }
          }


    }
];

// This function is used to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, (err) => {
      if (err) {
        console.log(err);  
        } else {
            console.log('Successfully created READMe.md!')
        }
    }):
}

// This function will  initialize  the app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('generatedREADME.md', generateMarkdown(answers));
      });
}

// Function call to initialize app
init();
