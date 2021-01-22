// Assignment Code
var generateBtn = document.querySelector("#generate");

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
