var generateBtn = document.querySelector("#generate");

function writePassword() {
  var characterPrompt  = prompt("How many characters?");
  var characters = parseInt(characterPrompt);
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

  function generatePassword() {
    var charset = []
    if (uppercase) {
      charset.splice(0,0, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
    }
    if (lowercase) {
      charset.splice(0,0, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
    }
    if (specials) {
      charset.splice(0,0, "!","@","#","$","%","^","&","*","(",")","_","+","-","=",",",".","?","/")
    }
    if (numbers) {
      charset.splice(0,0, "1", "2", "3", "4", "5", "6", "7", "8", "9", "0")
    } 
    var finishedPassword = "";
    for (i = 0; i < characters; i++) {
      finishedPassword += charset[Math.floor(Math.random() * charset.length)];
    }
    return finishedPassword;
  }

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);
