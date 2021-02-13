// Assignment code here


// Prompts for user input
window.alert("Welcome to my Password Generator");
var randoInput = window.prompt("How many characters would you like your password to be?");
var b = parseInt(randoInput);
var symbVerify = confirm("Would you like to include random symbols? OK for 'Yes' or CANCEL for 'NO'");
var charUpVerify = confirm("Would you like to include random UPPER case letters? OK for 'Yes' or CANCEL for 'NO'");
var numVerify = confirm("Would you like to include random Numbers? OK for 'Yes' or CANCEL for 'NO'");
var charLwrVerify = confirm("Would you like to include random LOWER case letters? OK for 'Yes' or CANCEL for 'NO'");

// Defined Arrays
var passCharUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
var passCharLwr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var passNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var passSym = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];



const generatePassword = (length = b) => {
  // Declare all characters
  let chars = '';

  console.log(charUpVerify);

  if (charUpVerify) {
    chars = passCharUpper.join('');
  }
  if (charLwrVerify) {
    chars = chars.concat(passCharLwr.join(''));
  }
  if (numVerify) {
    chars = chars.concat(passNum.join(''));
  }
  if (symbVerify) {
    chars = chars.concat(passSym.join(''));
  }
  console.log(chars);
  // Pick characers randomly
  let str = '';
  for (let i = 0; i < length; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return str;

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



