// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = getUserInput();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener('click', writePassword);
var numericCharacters =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowerCase = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var upperCase = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];
//get user input through confirms and prompts
function getUserInput(){
  var passwordLength= prompt("how long would you like your password to be?")


var hasNumbers= confirm("would you like your password to have numbers? ")
var upperCase= confirm("would you like capital letters in your password? ")

var lowerCase= confirm ("would you like lowercase letters in your password? ")

var hasSymbols= confirm ("would you like symbols in your password? ")

var userchoice= { 
  confirmLength: passwordLength,
  confirmNumbers: hasNumbers,
  confirmupperCase: upperCase,
  confirmSymbols: hasSymbols,
  confirmLowerCase: lowerCase,
}
console.log(userchoice)
return userchoice

}

//create fuction to randomize arrays that we use

//giant function to put it all together