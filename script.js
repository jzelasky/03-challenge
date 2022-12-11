// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
/*function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
*/

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

//to do: add error selecting no character types

var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "w", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];

function generatePassword(){
  var password = [];
  var lowerCaseAsk = confirm("Do you want to include lowercase chracters?");
  var upperCaseAsk = confirm("Do you want to include uppercase characters?");
  var numericAsk = confirm("Do you want to include numeric characters?");
  var specialAsk = confirm("Do you want to include special letters?");
  if (lowerCaseAsk == true){
    var password = password.concat(lowerCase);
  } 
  if (upperCaseAsk == true){
    var password = password.concat(upperCase);
  } 
  if (numericAsk == true){
    var password = password.concat(numeric);
  } 
  if (specialAsk == true){
    var password = password.concat(special);
  } 
  if (lowerCaseAsk == false && upperCaseAsk == false && numericAsk == false && specialAsk == false) {
    if (confirm("Must choose at least one character type. Do you want to try again?") == true){
      generatePassword();
    } else {
      return;
    }
  }
  return password;

}

function shuffleArray(password) {
  password.sort(() => Math.random() - 0.5);
}

function writePassword() {
  var size = prompt("How many characters do you want between 8 and 128?");
  if (size < 8 || size > 128){
    if (confirm("Must choose between 8 and 128 characters. Do you want to try again?") == true){
      writePassword();
    } else {
      return;
    }
  }
  
  var password = generatePassword();
 
  shuffleArray(password);
  var password = password.slice(0, size);
  var password = password.join('');
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);