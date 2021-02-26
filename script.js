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
  
  var charLength = window.prompt("Select a character length between 8 and 128 inclusive");
  // a check/function here to determine the input is numberic and between 8 and 128.    

  var specialCharSelection = window.confirm("Would you like special characters to be used?\nOK for 'yes' and cancel for 'no'");
  var numericCharSelection = window.confirm("Would you like numeric characters to be used?\nOK for 'yes' and cancel for 'no'");
   // If both upper and lower are selected as false, then alphabet characters cannot be used. 
  var lowerCaseSelection = window.confirm("Would you like lowercase characters to be used?\nOK for 'yes' and cancel for 'no'");
  var upperCaseSelection = window.confirm("Would you like uppercase characters to be used?\nOK for 'yes' and cancel for 'no'");

  window.alert("The selections made: " + "\n " + "\nChar Length: " + charLength + "\nSpecial: " + specialCharSelection + "\nnumeric: " + numericCharSelection + "\nlowercase: " + lowerCaseSelection + "\nuppercase: " + upperCaseSelection);
  
  // the password generation array will most likely be here or triggers the new function. //window.alert(password array);
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







