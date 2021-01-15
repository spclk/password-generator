// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

function generatePassword() {
  var pwlength = parseInt(prompt('How many characters?'));
  if (pwlength >= 8 && pwlength <= 128 && !isNaN(pwlength)) {
    console.log ("valid entry")
    var ifLowercase = confirm ("Would you like to include lowercase letters?") 
    var ifUppercase = confirm ("Would you like to include uppercase letters?") 
    var ifNumbers = confirm ("Would you like to include numbers?") 
    var ifSpecialCharacters = confirm ("Would you like to include special characters?") 
    
    console.log (ifLowercase, ifUppercase, ifNumbers, ifSpecialCharacters)

  }

    var allLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var allUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var allNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var allSpecialCharacters = ["~","!","#","$","%","^","&","*","(",")","_","-","+","=","`","<",",",">",".","?","/","{","}","[","]","|"];

  if (ifLowercase === false && ifUppercase === false && ifNumbers === false && ifSpecialCharacters === false) {
    alert ("Password must include lowercase letters, uppercase letters, numbers, or special characters")
    return generatePassword ()
  }
  return pwlength

  
  

}



// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
