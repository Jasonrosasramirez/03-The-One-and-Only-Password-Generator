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
  
  window.alert(charLength);
  var charLength = window.prompt("Select a character length between 8 and 128 inclusive");
  window.alert(charLength);


  // window.prompt("Select your character types to include in password"); // THEN I choose lowercase, uppercase, numeric, and/or special characters
  
  //showMe();
  
  // the password generation array will most likely be here or triggers the new function. //window.alert(password array);
}


function showMe() { // this will be my debugging tool 
  console.log("Show me function triggered"); 
  console.log("duck equals " );
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







