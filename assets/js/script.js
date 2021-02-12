// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
debugger;
function generatePassword() {
  window.alert("Please Select Criteria during the next prompts");
  var charactersAZ = prompt("How many characters do you want in your new password?" + "\n" + "Please choose a number of at least 8 and no more that 128");
  var symbols = confirm("Would you like symbols in your password?");

  if (charactersAZ < 8 || charactersAZ > 128) {
    window.prompt("Please enter between 8 and 128!");
  } else {
    window.prompt("Please enter a number!");

  }
  if (symbols) {
    window.alert("Approved Symbols: " + "\n" + " '!#$%&()*+,-./:;<=>?@[\]^_`{|}~" + "\n" + "Will be added to your password");
  }
  else {
    window.alert("No symbols will be added to your password");
  }



}

