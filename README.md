# passwordGeneratorJS

## Link

[Link](https://seff0.github.io/passwordGeneratorJS/)

## Description

This password generator was built using JavaScript. Everything in this repo was provided in advance except for the writePassword function, which was written by me. The function will prompt the user to ask how many characters they would like in their password, as well as whether or not they want uppercase, lowercase, numbers, or special characters. If they chose too few or too many characters, or if they fail to select at least one type of character, an alert appears and restarts the process. Once the user makes their selections, the generatePassword function begins.

generatePassword will splice characters into an array 'charset' based on user selections. Then, a for loop selects a random string from this array and concatenates the string into a new finishedPassword string. Once the finishedPassword string is complete, it is returned and inserted into the HTML to be displayed onscreen.

## Screenshot

[index.html](./Assets/passwordgen.png)
