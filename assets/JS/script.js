// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// need to prompt a user for password length, and characters to use in password
// take user input and create a pool of potential characters
// pull random characters from pool and use in final password
// return final password
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9",]
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

var characterArray = [];                 
var finalPassword = []
//function block
function generatePassword(){
 var passwordlength = prompt("How long do you want the password to be?");
 while(passwordlength<8 || passwordlength>128) {

passwordlength = prompt("Invalid password length. How long do you want the password to be?");

 }
 var confirmlower = confirm("Would you like lowercase characters in your password?");
 var confirmupper = confirm("Would you like uppercase characters in your password?");
 var confirmnumber = confirm("Would you like to use numbers in your password?");
 var confirmspecial = confirm("Would you like to use special characters in your password?");

if (confirmlower===true) {
  // current state of characterArray now equals character array combined with lowerArray
  characterArray = characterArray.concat(lowerArray);
}

if (confirmupper===true) {
  // current state of characterArray now equals character array combined with lowerArray
  characterArray = characterArray.concat(upperArray);
}

if (confirmnumber===true) {
  // current state of characterArray now equals character array combined with lowerArray
  characterArray = characterArray.concat(numberArray);
}

if (confirmspecial===true) {
  // current state of characterArray now equals character array combined with lowerArray
  characterArray = characterArray.concat(specialArray);
}

if (!confirmlower && !confirmupper && !confirmnumber && !confirmspecial) { 


  alert("No character types selected. Please try again.")
  

}

console.log(characterArray)

// 1. var=0- start the variable i or loop at 0
// 2. i<passwordlength is the loop condition. 
// 3. i++ just adds 1 . i-- would subtract 1
for(var i = 0; i < passwordlength; i++){

var randomIndex = Math.floor(Math.random() * characterArray.length)// 1.9 gets rounded down to 1
var characterValue = characterArray[randomIndex]
finalPassword.push(characterValue)
console.log(finalPassword)
}


// joins array on empty space
  return finalPassword.join("")
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
