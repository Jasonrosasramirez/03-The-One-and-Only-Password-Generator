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
  window.prompt("Select a character length between 8 and 128 inclusive");
  window.prompt("Select your character types to include in password"); // THEN I choose lowercase, uppercase, numeric, and/or special characters
  
  // the password generation array will most likely be here or triggers the new function
  
  //window.alert(password array);

}

/*
WHEN prompted for character types to include in the password


WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

*/





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







