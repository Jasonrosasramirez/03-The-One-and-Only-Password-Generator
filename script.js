
// Character Arrays & Variables 
var specialChar = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',')','(','}','{',']','[','~','-','_','.']; // Reamoved ',' from this array. 
var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var generateBtn = document.querySelector("#generate"); // This is the element in generateBtn



// Essential Functions 


function generatePassword() {
  alert("(Opening)\nHello friend. We will begin the password generation process\n\nYou will be asked the following criteria:\n\nPassword Length\nUse of special characters\nUse of numeric characters\nUse of lowercase characters\nUse of uppercase characters ");

  var charLengthBool = false;  
  while (charLengthBool === false) {
    var charLength = Math.floor(parseInt(prompt("(Page 1)\nSelect a password length between 8 and 128 inclusive"))); // how can the input be kept as an int if a number is input. 

    if (charLength >= 8 && charLength <= 128) {
      charLengthBool = true;
      
      var specialCharSelection = confirm("(Page 2)\nWould you like special characters to be used?\n\nOK for 'yes' and cancel for 'no'");
      var numericCharSelection = confirm("(Page 3)\nWould you like numeric characters to be used?\n\nOK for 'yes' and cancel for 'no'"); 
      var lowerCaseSelection = confirm("(Page 4)\nWould you like lowercase characters to be used?\n\nOK for 'yes' and cancel for 'no'");
      var upperCaseSelection = confirm("(Page 5)\nWould you like uppercase characters to be used?\n\nOK for 'yes' and cancel for 'no'");

    } else {
      alert("(Password Length Error)\n\nWoah there, partner. You need to enter a number between 8 and 128.");
    }
  } // This section is the user promts asking for the password criteria. 

  // This section uses the information from the portion above to build the password. 
  
  var isItSafeToBuildPassword; // Hello :) I make sure the characters above are not all set to false and cause your for loop to create without end. 
  if (specialCharSelection==false && numericCharSelection==false && upperCaseSelection==false && lowerCaseSelection==false) {
    isItSafeToBuildPassword = false; 
  } else {
    isItSafeToBuildPassword = true; 
  }
  console.log("The safe to build variable is set as " + isItSafeToBuildPassword); 
 
  
  if (isItSafeToBuildPassword == true) {
    var genPasswordDecision = confirm("(Page 6)\nBuild password with this criteria? " + "\nOK for 'yes' and cancel for 'no " + "\n " + "\nPassword Length: " + charLength + "\nUse of special characters: " + specialCharSelection + "\nUse of numeric characters: " + numericCharSelection + "\nUse of lowercase characters: " + lowerCaseSelection + "\nUse of uppercase characters: " + upperCaseSelection);
  } else {
    alert("(Character Type Error)\nYou must choose to have at least one character type. Criteria selection will start over "); 
    generatePassword();
  }


    // This section actually builds the password. So this is the bread and butter 
  if (genPasswordDecision === true && isItSafeToBuildPassword === true) {

    var passwordArray = [];
    for (i = 0; i < charLength; i += 0) {
      
     if (specialCharSelection == true) { 
      var randomArraySelectionInt = Math.floor(Math.random() * (specialChar.length-1)) + 1; //I generate a random number that will be used to select a random array element in the character array from way up there :) And because this is a for loop, I will be diferent everytime    
      if (i === charLength) { break; }
      i++; // I represent whenever an element is added to the password array. That way the for loop ends at 8 characters.
      passwordArray.push(specialChar[randomArraySelectionInt]); // I add an element at the end of the existing passwork array using randomly accessed elements. 
     }
     
     if (numericCharSelection == true) { 
      var randomArraySelectionInt = Math.floor(Math.random() * (numericChar.length-1)) + 1;     
      if (i === charLength) { break; }
      i++;
      passwordArray.push(numericChar[randomArraySelectionInt]);  
      }
      
     if (lowerCaseSelection == true) { 
      var randomArraySelectionInt = Math.floor(Math.random() * (lowerCase.length-1)) + 1;
      if (i === charLength) { break; }
      i++;
      passwordArray.push(lowerCase[randomArraySelectionInt]);  
     }
    
     if (upperCaseSelection == true) { 
      var randomArraySelectionInt = Math.floor(Math.random() * (upperCase.length-1)) + 1;
      if (i === charLength) { break; }
      i++;
      passwordArray.push(upperCase[randomArraySelectionInt]);  
     }

      console.log("I looped this many times. Just add one to the iteration " + i);
      console.log("this is the value of passwordArray right now " + passwordArray);
     
    } // I add elements to the password array :D But sometimes I add too many elements

    console.log("Your password array length is " + passwordArray.length + " and your desired length is " + charLength); 

    alert("(Your New Password!)\nBelow is your new password\n\n" + passwordArray.join("")); // This is where the new password is displayed on screen
    console.log("\n\nThe password array Length " + passwordArray.length + " the character length is " + charLength);
  } 
  
  if (genPasswordDecision === false) { 
    alert("(Process Exit)\nYou have chosen to not generate a password. \nThank you");
  }
    
} // This function takes user inputs and creates the random password 

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







