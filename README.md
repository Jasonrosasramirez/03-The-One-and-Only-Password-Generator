# 03 JavaScript: Password Generator

## Your Task

This week’s homework requires you to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

The password can include special characters. If you’re unfamiliar with these, see this [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password

WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria
THEN I select which criteria to include in the password

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)

## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

  * The homework should not produce any errors in the console when you inspect it using Chrome DevTools.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the homework instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.

- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.



Leaving this here incase something goes wrong. This is basically my junk/maybe useful in the futue pile for now. 

//Creating array or random element
function passwordRandomCharacters (Array) {
  console.log("passwordRandomChar function Activated. char length " + charLength);

  var indexofArray = Math.floor(Math.random() * Array.length);
  var grabElement = Array[indexofArray];

  console.log(grabElement);

  return grabElement;
}


var passwordString = "";
  var characterList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var characterLength = characterList.charLength;

  for (var i = 0; i < charLength; i++) {
    passwordString += characterList.charAt(Math.floor(Math.random() * characterLength));
  } 

  console.log("this is the password string generated " + passwordString);
  

    var passwordProperties = { // Object to store key value pairs of user input 
    charLength: charLength,
    specialCharSelection: specialCharSelection,
    numericCharSelection: numericCharSelection,
    lowerCaseSelection: lowerCaseSelection,
    upperCaseSelection: upperCaseSelection
  }

  // console.log("This is passwordProperties" + string(passwordProperties));
  
  console.log("passwordRandomChar function Activated. char length " + charLength);