var generateBtn = document.querySelector("#generate");

function writePassword() {
  //Ask the user how many characters
  var characterPrompt = prompt("How many characters?");
  //If less than 8 or more than 128 characters are selected, show alert and start over
  if (characters < 8 || characters > 128) {
    alert("Password must be between 8-128 characters.");
    writePassword();
  }
  //These are the password criteria prompts.
  var uppercase = confirm("Uppercase letters?");
  var lowercase = confirm("Lowercase letters?");
  var specials = confirm("Special characters?");
  var numbers = confirm("Numbers?");
  //If all 4 criteria prompts are falsy, show alert and start over
  if (!uppercase && !lowercase && !specials && !numbers) {
    alert("Password must include at least one type of character, silly.");
    writePassword();
  }
  //Take the user inputs and make a password out of them
  function generatePassword() {
    //Make an empty array
    var charset = [];
    //If user selected uppercase, splice all uppercase characters into the charset array
    if (uppercase) {
      charset.splice(
        0,
        0,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      );
    }
    if (lowercase) {
      charset.splice(
        0,
        0,
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
      );
    }
    if (specials) {
      charset.splice(
        0,
        0,
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "_",
        "+",
        "-",
        "=",
        ",",
        ".",
        "?",
        "/"
      );
    }
    if (numbers) {
      charset.splice(0, 0, "1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
    }
    //Array is finished, now time to pull from it
    //Make an empty string to put our characters into
    var finishedPassword = "";
    //For loop will choose a random character from charset and insert it into finishedPassword until user-defined character limit is reached
    for (i = 0; i < characters; i++) {
      //'+=' is an assignment operator and can be used to concatenate strings
      finishedPassword += charset[Math.floor(Math.random() * charset.length)];
    }
    //Finally, return finishedPassword to be inserted into HTML
    return finishedPassword;
  }

  //These last few lines were provided for this assignment
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
