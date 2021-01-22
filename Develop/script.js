// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specialChars = ["!","@","#","$","%","^","&","*","(",")","_","+","-","="]
var numChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
// Write password to the #password input
function writePassword() {
  var characters  = prompt("How many characters?");
  if ((characters<8 || characters>128)) {
    alert("Password must be between 8-128 characters.");
    writePassword();
  }
  var uppercase = confirm("Uppercase letters?");
  var lowercase = confirm("Lowercase letters?");
  var specials = confirm("Special characters?");
  var numbers = confirm("Numbers?");
  if (!uppercase && !lowercase && !specials && !numbers) {
    alert("Password must include at least one type of character, silly.")
    writePassword()
  }
  var password = generatePassword() {
    
  };

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
