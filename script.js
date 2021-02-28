
// Character Arrays & Variables 
var specialChar = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var generateBtn = document.querySelector("#generate"); // This is the element in generateBtn



// Essential Functions 


function generatePassword() {
  alert("Hello friend. We will begin the password generation process");

  var charLengthBool = false;  
  while (charLengthBool === false) {
    var charLength = Math.floor(parseInt(prompt("Select a character length between 8 and 128 inclusive"))); // how can the input be kept as an int if a number is input. 

    if (charLength >= 8 && charLength <= 128) {
      charLengthBool = true;
      
      var specialCharSelection = confirm("Would you like special characters to be used?\nOK for 'yes' and cancel for 'no'");
      var numericCharSelection = confirm("Would you like numeric characters to be used?\nOK for 'yes' and cancel for 'no'");
      // If both upper and lower are selected as false, then alphabet characters cannot be used. 
      var lowerCaseSelection = confirm("Would you like lowercase characters to be used?\nOK for 'yes' and cancel for 'no'");
      var upperCaseSelection = confirm("Would you like uppercase characters to be used?\nOK for 'yes' and cancel for 'no'");

    } else {
      alert("Woah there, partner. You need to enter a number between 8 and 128. charLength " + typeof (charLength));
    }
  } // This section is the user promts asking for the password criteria. 


  // This section uses the information from the portion above to build the password. 
  var genPasswordDecision = confirm("Build password with this criteria? " + "\nOK for 'yes' and cancel for 'no " + "\n " + "\nChar Length: " + charLength + "\nSpecial: " + specialCharSelection + "\nNumeric: " + numericCharSelection + "\nLowercase: " + lowerCaseSelection + "\nUppercase: " + upperCaseSelection);

  var isItSafeToBuildPassword;
  if (specialCharSelection==false && numericCharSelection==false && upperCaseSelection==false && lowerCaseSelection==false) {
    isItSafeToBuildPassword = false; 
  } else {
    isItSafeToBuildPassword = true; 
  }
  alert("your safe to build is set as " + isItSafeToBuildPassword); 

    // This section actually builds the password 
  if (genPasswordDecision === true && isItSafeToBuildPassword === true) {

    var passwordArray = [];
    for (i = 0; i < charLength; i+=0) {
      
  
     if (specialCharSelection == true) { 
      var randomArraySelectionInt = Math.floor(Math.random() * charLength) + 1;
      console.log("The array selector is .." + randomArraySelectionInt);
     
      i++;
      passwordArray.push(specialChar[randomArraySelectionInt]);
     }
     
     if (numericCharSelection == true) { 
      var randomArraySelectionInt = Math.floor(Math.random() * charLength) + 1;
      console.log("The array selector is .." + randomArraySelectionInt);
     
      i++;
      passwordArray.push(numericChar[randomArraySelectionInt]);
     }
  
     if (lowerCaseSelection == true) { 
      var randomArraySelectionInt = Math.floor(Math.random() * charLength) + 1;
      console.log("The array selector is .." + randomArraySelectionInt);
     
      i++;
      passwordArray.push(lowerCase[randomArraySelectionInt]);
     }
    
     if (upperCaseSelection == true) { 
      var randomArraySelectionInt = Math.floor(Math.random() * charLength) + 1;
      console.log("The array selector is .." + randomArraySelectionInt);
     
      i++;
      passwordArray.push(upperCase[randomArraySelectionInt]);
     }
  
      console.log("I looped " + i);
      console.log("this is the value of passwordArray right now " + passwordArray);
     
    }
    alert("Below is your new password\n" + passwordArray.join("")); // This is where the new password is displayed on screen
    
  } 
  else if (genPasswordDecision === true && isItSafeToBuildPassword === false) {
    alert("No password attributes were selected ");
  } else {
    alert("You have chosen to not generate a password. \nThank you"); 
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







