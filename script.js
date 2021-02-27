
// Character Arrays & Variables 
var specialChar = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var generateBtn = document.querySelector("#generate"); // This is the element in generateBtn

var charLength;
var specialCharSelection;
var numericCharSelection;
var lowerCaseSelection;
var upperCaseSelection


// Essential Functions 


function generatePassword() {
  alert("Hello friend. We will begin the password generation process");

  var charLengthBool = false; // Checks to see if the character length criteria has been met.  
  while (charLengthBool === false) {
    charLength = parseInt(prompt("Select a character length between 8 and 128 inclusive")); // how can the input be kept as an int if a number is input. 

    if (charLength >= 8 && charLength <= 128) {
      charLengthBool = true;
      
      specialCharSelection = confirm("Would you like special characters to be used?\nOK for 'yes' and cancel for 'no'");
      numericCharSelection = confirm("Would you like numeric characters to be used?\nOK for 'yes' and cancel for 'no'");
      // If both upper and lower are selected as false, then alphabet characters cannot be used. 
      lowerCaseSelection = confirm("Would you like lowercase characters to be used?\nOK for 'yes' and cancel for 'no'");
      upperCaseSelection = confirm("Would you like uppercase characters to be used?\nOK for 'yes' and cancel for 'no'");

    } else {
      alert("Woah there, partner. You need to enter a number between 8 and 128. charLength " + typeof (charLength));
    }
  } // This section is the user prompt


  // this triggers if the password gets generated
  var readyToGen = confirm("Build password with this criteria? " + "\nOK for 'yes' and cancel for 'no " + "\n " + "\nChar Length: " + charLength + "\nSpecial: " + specialCharSelection + "\nNumeric: " + numericCharSelection + "\nLowercase: " + lowerCaseSelection + "\nUppercase: " + upperCaseSelection);
  if (readyToGen === true) {
    alert("This is where the password is generated " + readyToGen);
    // This is where the signal to create the password is created. 
  } else {
    alert("This is where we cancel " + readyToGen);
  }    

  var passwordProperties = { // Object to store key value pairs of user input 
    charLength: charLength,
    specialCharSelection: specialCharSelection,
    numericCharSelection: numericCharSelection,
    lowerCaseSelection: lowerCaseSelection,
    upperCaseSelection: upperCaseSelection
  }

  // console.log("This is passwordProperties" + string(passwordProperties));
  
  console.log("passwordRandomChar function Activated. char length " + charLength);



  var passwordArray = [];
  // upperCase for character selection in demo
  
  var randomArraySelectionInt = Math.floor(Math.random() * charLength) + 1;
  console.log("The array selector is .." + randomArraySelectionInt);


  for (i = 0; i < charLength; i++) {
    passwordArray.push(upperCase[randomArraySelectionInt]);
    console.log("I looped " + i);
    console.log("this is the value of passwordArray right now " + passwordArray);
  }
  
  
}


function writePassword() {
  generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
} // Write password to the #password input. This is the passover function


// User Actions 
generateBtn.addEventListener("click", writePassword); // element.addEventListener(event, function, useCapture);






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







