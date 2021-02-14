// Assignment code here
// Prompt for user 
window.alert("Welcome to my Password Generator!" + "\n" + "Please select 'Generate Password'");
// Defined Arrays
var passCharUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
var passCharLwr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var passNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var passSym = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
//debugger;
const generatePassword = () => {
  // Character request and force integer assignment
  var randoInput = window.prompt("How many characters would you like your password to be? Please choose between 8 and 128!");
  var length = parseInt(randoInput);
  // Hard code assurance for user input to meet specifications
  if (length > 7 && length < 129) {
    if (isNaN(length) || length === "" || length === null) {
      alert("Please enter a number!");
    }
    else {
      // Declare all characters options
      var symbVerify = confirm("Would you like to include random symbols? OK for 'Yes' or CANCEL for 'NO'");
      var charUpVerify = confirm("Would you like to include random UPPER case letters? OK for 'Yes' or CANCEL for 'NO'");
      var numVerify = confirm("Would you like to include random Numbers? OK for 'Yes' or CANCEL for 'NO'");
      var charLwrVerify = confirm("Would you like to include random LOWER case letters? OK for 'Yes' or CANCEL for 'NO'");
    }
  } else {
    alert("Please select a number between 8 and 128, and select 'Generate Password'");
  }
  // String transformation via prompt selections
  let chars = '';
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
  // if (passwordText.value === "" || passwordText.value === null)
  //   alert("Please select at least one condition!");
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



