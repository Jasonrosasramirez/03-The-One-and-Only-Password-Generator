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
  console.log("hey, I worked");

}

// Add event listener to generate button

// element.addEventListener(event, function, useCapture);
generateBtn.addEventListener("click", writePassword); 







// Who likes comments :) 

/* 
24Feb2021
. Using the chrome inspector, sources states funtion generatePassword() is undefined. 
. 
.
.
.
.

*/







