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
  window.alert("Hello friend. We will begin the password generation process");
  
  //var charLength = window.prompt("Select a character length between 8 and 128 inclusive");

  var charLengthBool = false; // Checks to see if the character length criteria has been met.  
  while (charLengthBool == false) { 
    var charLength = window.prompt("Select a character length between 8 and 128 inclusive"); // how can the input be kept as an int if a number is input. 
    // parseInt(charLength, 10); // should change the charLength into a number but doesn't ... 

    
    if (charLength >= 8 && charLength <= 128 ) {
      charLengthBool = true;  
      window.alert("it worked! " + typeof(charLength));
    } else {
      window.alert("Woah there, partner. You need to enter a number between 8 and 128. charLength " + typeof(charLength)); 
    }
  }
  
  var specialCharSelection = window.confirm("Would you like special characters to be used?\nOK for 'yes' and cancel for 'no'");
  var numericCharSelection = window.confirm("Would you like numeric characters to be used?\nOK for 'yes' and cancel for 'no'");
   // If both upper and lower are selected as false, then alphabet characters cannot be used. 
  var lowerCaseSelection = window.confirm("Would you like lowercase characters to be used?\nOK for 'yes' and cancel for 'no'");
  var upperCaseSelection = window.confirm("Would you like uppercase characters to be used?\nOK for 'yes' and cancel for 'no'");

  var readyToGen = window.confirm("Build password with this criteria? " + "\nOK for 'yes' and cancel for 'no " + "\n " + "\nChar Length: " + charLength + "\nSpecial: " + specialCharSelection + "\nNumeric: " + numericCharSelection + "\nLowercase: " + lowerCaseSelection + "\nUppercase: " + upperCaseSelection);
  if (readyToGen === true) { 
    window.alert("This is where the password is generated " + readyToGen);
  } else {
    window.alert("This is where we cancel " + readyToGen);
  }
  
}


// Add event listener to generate button

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







