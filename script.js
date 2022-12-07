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

//to do: add errors for wrong number of characters or selecting no character types

var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "w", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];

function writePassword() {
  var size = prompt("How many characters do you want between 8 and 128?");
  if (size < 8 || size > 128){
    if (confirm("Must choose between 8 and 128. Do you want to try again?") == true){
      writePassword();
    } else {
      return;
    }
  }
  var password = [];
  if (confirm("Do you want to include lowercase chracters?") == true){
    var password = password.concat(lowerCase);
  } 
  if (confirm("Do you want to include uppercase characters?") == true){
    var password = password.concat(upperCase);
  } 
  if (confirm("Do you want to include numeric characters?") == true){
    var password = password.concat(numeric);
  } 
  if (confirm("Do you want to include special letters?") == true){
    var password = password.concat(special);
  } 
  function shuffleArray(password) {
    password.sort(() => Math.random() - 0.5);
  }
  shuffleArray(password);
  var password = password.slice(0, size);
  var password = password.join('');
  alert (password);
}

generateBtn.addEventListener("click", writePassword);