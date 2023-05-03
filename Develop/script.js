// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //function to be created that generates the password
  var passwordText = document.querySelector("#password");

  passwordText.value = password; //changes text in generate password box depending on what generate password function does

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //when button is clicked the function "writePassword" is activated/called

//When button is clicked series of prompts appear for password criteria
  //1 prompt asks length of password, min 8 characters, max 128 characters
  //2 prompt asks whether or not to include character type lowercase
  //3 prompt asks whether or not to include character type uppercase
  //4 prompt asks whether or not to include character type numeric
  //5 prompt asks whether or not to include character type special characters

//After prompts are answered the inputs are recorded and at least one character type should be selected
  //password gets generated
  //password is displayed in alert

//split random gen functions into pieces ie; one for lower case, one for uppercase, one for number, one for special chars
