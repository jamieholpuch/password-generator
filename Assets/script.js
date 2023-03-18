
//Computer prompt for password criteria when user clicks "generate password" button
//computer prompt to select password length
  //password length options of at least 8 characters and no more than 128 characters
//computer prompt to select character types
  //character type options to include (yes or no): lowercase, uppercase, numeric, and/or special characters
  //at least one of each character type selected is included
//computer generate password that matches criteria provided
//computer display password to user either in alert or on page


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);