var specialChar = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
var upperCase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Assignment Code



var generateBtn = document.querySelector("#generate"); // This is the element in generateBtn

// Write password to the #password input
function writePassword() {
  generatePassword();

  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  alert("Hello friend. We will begin the password generation process");

  // prompt input section. Might make this into a seperate function. 

  var charLengthBool = false; // Checks to see if the character length criteria has been met.  
  while (charLengthBool == false) {
    var charLength = parseInt(prompt("Select a character length between 8 and 128 inclusive")); // how can the input be kept as an int if a number is input. 

    if (charLength >= 8 && charLength <= 128) {
      charLengthBool = true;
      alert("it worked! " + typeof (charLength));
    } else {
      alert("Woah there, partner. You need to enter a number between 8 and 128. charLength " + typeof (charLength));
    }
  }

  var specialCharSelection = confirm("Would you like special characters to be used?\nOK for 'yes' and cancel for 'no'");
  var numericCharSelection = confirm("Would you like numeric characters to be used?\nOK for 'yes' and cancel for 'no'");
  // If both upper and lower are selected as false, then alphabet characters cannot be used. 
  var lowerCaseSelection = confirm("Would you like lowercase characters to be used?\nOK for 'yes' and cancel for 'no'");
  var upperCaseSelection = confirm("Would you like uppercase characters to be used?\nOK for 'yes' and cancel for 'no'");

  var readyToGen = confirm("Build password with this criteria? " + "\nOK for 'yes' and cancel for 'no " + "\n " + "\nChar Length: " + charLength + "\nSpecial: " + specialCharSelection + "\nNumeric: " + numericCharSelection + "\nLowercase: " + lowerCaseSelection + "\nUppercase: " + upperCaseSelection);
  if (readyToGen === true) {
    alert("This is where the password is generated " + readyToGen);
  } else {
    alert("This is where we cancel " + readyToGen);
  }

  // password generation section. Might make this into a seperate function. 

  // Object to store key value pairs of user input 
  var passProperties = {
    charLength: charLength,
    specialCharSelection: specialCharSelection,
    numericCharSelection: numericCharSelection,
    lowerCaseSelection: lowerCaseSelection,
    upperCaseSelection: upperCaseSelection
  }
  return passProperties;
}

//Creating array or random element
function passRanCharacters (Array) {
  var indexofArray = Math.floor(Math.random() * Array.length);
  var grabElement = Array[indexofArray];

  return grabElement;
}

// element.addEventListener(event, function, useCapture);
generateBtn.addEventListener("click", writePassword);



// Who likes comments :) 

/*
24Feb2021
. Using the chrome inspector, sources states funtion generatePassword() is undefined.
25Feb2021
. Finally learned to push code to Github on my own.
.
.
.

*/







