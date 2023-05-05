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
  //split random gen functions into pieces ie; one for lower case, one for uppercase, one for number, one for special chars  
  //password gets generated
  //password is displayed in alert/in page
  


//Project Start


//Arrays for characters
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "x", "z"];

var uppCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "X", "Z"];

var numOpt = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specOpt =["!", "”", "#", "$", "%", "&", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "|", "~"]


//random gen
var lmin = 0; //lowercase                                                           //Gives the arrays max and min values a number
var lmax = 26; //lowercase

var umin = 0; //Uppercase
var umax = 26; //Uppercase

var nmin = 0; //Numbers
var nmax = 10; //NUmbers

var smin = 0; //Special Characters
var smax = 24; //Special Characters

var length = Number(prompt("Desired Length?"));                                     //Creates prompt asking for desired length of password and uses that number as the final length
                                                                                    //stores the original length chosen by user in prompt

var smolCase = confirm("contain lowercase?");                                       //Prompt for adding lower case

var bigCase = confirm("Contain Uppercase?");                                        //Prompt for adding upper case

var numCon = confirm("Contain Numbers?");                                           //Prompt for adding numbers

var speCon = confirm("Contain Special Characters?");                                //Prompt for adding special characters



function generatePassword() { 
  var password = "";

  if (length < 8 || length > 128) {
    alert("Error invalid password length")
    return password;
  };                                                                                  //Stating that the length is what the user has inputed as their desired length
  
  if (numCon == false && bigCase == false && speCon == false && smolCase == false) {
    alert("Error no options chosen");
    return password;
  };
 
  // 1st IF done
      // if (Upper == True and (Lower == False  Special == False  Number == False)) {  
      // Upper True: Length = Length - Lower - Special - Number False: 0 
      // Lower True: 2 False: 0 
      // Special True: 2 False: 0  
      // Number True: 2 False: 0  }  

  if (bigCase == true && (smolCase == false && speCon == false && numCon == false)) { //This if statement states that if uppercase is chosen and any other character options aren't then it proceeds to the nested if statements.
    if (smolCase == true) {                                                           //First nested if statement states that if lowercase is chosen then the password length is decreased by 2 so the lowercase characters can be applied to the password 
      length = length - 2                                                             //and then the for loop is ran to randomly add two lowercase letters from the array to the password.
      for (var i = 0; i < 2; i ++) {
        var lowCaseRand = Math.floor(Math.random() * lmax)
        password = password + lowCase[lowCaseRand]; 
      }
    }
    if (speCon == true) {                                                             //Second nested if statement states that if special characters are chosen then the password length is decreased by 2 so the special characters can be applied to the password
      length = length - 2                                                             //and then the for loop is ran to randomly add two special characters from the array to the password.
      for (var i = 0; i < 2; i ++) {
        var specRand = Math.floor(Math.random() * smax)
        password = password + specOpt[specRand];
      }
    }
    if (numCon == true) {                                                             //Third nested if statement states that if numbers are chosen then the password length is decreased by 2 so the numbers can be applied to the password
      length = length - 2                                                             //and then the for loop is ran to randomly add two numbers from the array to the password.
      for (var i = 0; i < 2; i ++) {
        var numbRand = Math.floor(Math.random() * nmax)
        password = password + numOpt[numbRand];
      }
    } 
    if (bigCase == true) {                                                          //Fourth nested if statement states that if uppercase characters are chosen then the
      for (var i = 0; i < length; i ++) {                                           //for loop is ran to randomly add uppercase characters from the array to the password. The reason we do not decrease the length of the password by 2 is because we are            
        var uppCaseRand = Math.floor(Math.random() * umax)                          //just filling in the remaining spots with (in this case) uppercase characters.
        password = password + uppCase[uppCaseRand];
      }
    }
  };
      
      // 2nd IF done
      // Upper True: 2 False: 0 
      // Lower True: Length = Length - Upper - Special - Number False: 0 
      // Special True: 2 False: 0  
      // Number True: 2 False: 0 
   
  if (smolCase == true && (bigCase == false && speCon == false && numCon == false)) {
    if (bigCase == true) {
      length = length - 2
      for (var i = 0; i < 2; i ++) {
        var uppCaseRand = Math.floor(Math.random() * umax)
        password = password + uppCase[uppCaseRand];
      }
    }
    if (speCon == true) {
      length = length - 2
      for (var i = 0; i < 2; i ++) {
        var specRand = Math.floor(Math.random() * smax)
        password = password + specOpt[specRand];
      }
    }
    if (numCon == true) {
      length = length - 2
      for (var i = 0; i < 2; i ++) {
        var numbRand = Math.floor(Math.random() * nmax)
        password = password + numOpt[numbRand];
      }
    }
    if (smolCase == true) {
      for (var i = 0; i < length; i ++) {
        var lowCaseRand = Math.floor(Math.random() * lmax)
        password = password + lowCase[lowCaseRand];
      }
    }
  }; 
      
      // 3rd IF done
      // Upper True: 2 False: 0 
      // Lower True: 2 False: 0 
      // Special True: Length = Length - Upper- Lower - Number False: 0  
      // Number True: 2 False: 0  
    
  if (speCon == true && (bigCase == false && smolCase == false && numCon == false)) {
    if (bigCase == true ) {
      length = length - 2
      for (var i = 0; i < 2; i ++) {
        var uppCaseRand = Math.floor(Math.random() * umax)
        password = password + uppCase[uppCaseRand];
      }
    }
    if (smolCase == true) {
      length = length - 2
      for (var i = 0; i < 2; i ++) {
        var lowCaseRand = Math.floor(Math.random() * lmax)
        password = password + lowCase[lowCaseRand];
      }
    }
    if (numCon == true) {
      length = length - 2
      for (var i = 0; i < 2; i ++) {
        var numbRand = Math.floor(Math.random() * nmax)
        password = password + numOpt[numbRand];
      }
    }
    if (speCon == true) {
      for (var i = 0; i < length; i ++) {
        var specRand = Math.floor(Math.random() * smax)
        password = password + specOpt[specRand];
      }
    }
  };   

      // 4th IF 
      // Upper True: 2 False: 0 
      // Lower True: 2 False: 0 
      // Special True: 2 False: 0  
      // Number True: Length = Length - Upper - Lower - Special False: 0  
       
  if (numCon == true && (bigCase == false && speCon == false && smolCase == false)) {
    if (bigCase == true) {
      length = length - 2
      for (var i = 0; i < 2; i ++) {
        var uppCaseRand = Math.floor(Math.random() * umax)
        password = password + uppCase[uppCaseRand];
      }
    }
    if (speCon == true) {
      length = length - 2
      for (var i = 0; i < 2; i ++) {
        var specRand = Math.floor(Math.random() * smax)
        password = password + specOpt[specRand];
      }
    }
    if (smolCase == true) {
      length = length - 2
      for (var i = 0; i < 2; i ++) {
        var lowCaseRand = Math.floor(Math.random() * lmax)
        password = password + lowCase[lowCaseRand];
      }
    }
    if (numCon == true) {
      for (var i = 0; i < length; i ++) {
        var numbRand = Math.floor(Math.random() *nmax)
        password = password + numOpt[numbRand];
      }
    }
  };     
      // 5th IF   
      // if all true all add characters to password

      if (bigCase == true) {
        length = length - 2
        for (var i = 0; i < 2; i ++) {
          var uppCaseRand = Math.floor(Math.random() * umax)
          password = password + uppCase[uppCaseRand];
        }
      }
      if (speCon == true) {
        length = length - 2
        for (var i = 0; i < 2; i ++) {
          var specRand = Math.floor(Math.random() * smax)
          password = password + specOpt[specRand];
        }
      }
      if (smolCase == true) {
        length = length - 2
        for (var i = 0; i < 2; i ++) {
          var lowCaseRand = Math.floor(Math.random() * lmax)
          password = password + lowCase[lowCaseRand];
        }
      }
      if (numCon == true) {
        for (var i = 0; i < length; i ++) {
          var numbRand = Math.floor(Math.random() *nmax)
          password = password + numOpt[numbRand];
        }
      };
      
      // if all false then give error prompt
      
      
      
 
 
  return password;

}; 

 
 
 
 
 
      // if (smolCase == true && numCon == true) {                                    //
    
  //   length = length - 2
    
  //   for (var i = 0; i < 2; i ++) {
  //     var lowCaseRand = Math.floor(Math.random() * lmax)
  //     password = password + lowCase[lowCaseRand]; 
  //   }
  // } else {
  //   length = length
  // };


  // if (bigCase == true) {

  //   length - length - 2

  //   for (var i = 0; i < 2; i ++) {
  //     var uppCaseRand = Math.floor(Math.random() * umax)
  //     password = password + uppCase[uppCaseRand];
  //   }
  // } else {
  //   length = length
  // };
  

  // if (numCon == true) {

  //   length = length

  //   for (var i = 0; i < length; i ++) {
  //     var numbRand = Math.floor(Math.random() * nmax)
  //     password = password + numOpt[numbRand];
  //   }
  // };
  
  
  // if (speCon == true) {
    
  //   length = length - 2
    
  //   for (var i = 0; i < 2; i ++) {
  //     var specRand = Math.floor(Math.random() * smax)
  //     password = password + specOpt[specRand];
  //   }
  // } else {
  //   length = length
  // };





