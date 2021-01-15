// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

function generatePassword() {
  var pwlength = parseInt(prompt('How many chars?'));
  if (pwlength >= 8 && pwlength <= 128 && !isNaN(pwlength)) {
    console.log ("valid entry")
    var ifLowercase = confirm ("Would you like to include lowercase letters?") 
    var ifUppercase = confirm ("Would you like to include uppercase letters?") 
    var ifNumbers = confirm ("Would you like to include numbers?") 
    var ifSpecialCharacters = confirm ("Would you like to include special characters?") 
    console.log (ifLowercase, ifUppercase, ifNumbers, ifSpecialCharacters)
  }

  if (ifLowercase === false && ifUppercase === false && ifNumbers === false && ifSpecialCharacters === false) {
    alert ("Password must include lowercase letters, uppercase letters, numbers, or special characters")
    return generatePassword ()
  }
  return pwlength
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


// validate pwlength so that it is > 8 and < 128
// ask the user if they want lowercase characters
//  ... upercase
// ... numbers
// ... special characters 
// validate that all of these are not false
// get random characters from a pool of characters
// return the password 