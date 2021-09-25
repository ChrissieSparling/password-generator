// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//add event listener
generateBtn.addEventListener('click', writePassword);
//create index
var numericCharacters =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowerCase = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var upperCase = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];

function shuffle(array){
//grab random index first
var index= Math.floor(Math.random()*array.length)
var indexValue= array[index]
return indexValue
}

//get user input through confirms and prompts

function getUserInput(){
  var passwordLength= prompt("how long would you like your password to be?")
if(passwordLength >128){
     alert("password needs to be fewer than 128 characters!")
     return;
}
if(passwordLength <8){
     alert("password needs to be greater than 8 characters!")
     return;
}
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

function generatePassword(){
     var getUserChoice= getUserInput();
     var optionPool=[];
     var newPassword=[];
if(getUserChoice.confirmSymbols===true){
     optionPool=optionPool.concat(specialCharacters);
     optionPool.push(shuffle(specialCharacters));

}
if(getUserChoice.confirmLowerCase===true){
     optionPool=optionPool.concat(lowerCase);
     optionPool.push(shuffle(lowerCase));
}

if(getUserChoice.confirmupperCase===true){
     optionPool=optionPool.concat(upperCase);
     optionPool.push(shuffle(upperCase));

}

if(getUserChoice.confirmNumbers===true){
     optionPool=optionPool.concat(numbers);
     optionPool.push(shuffle(numbers));

}

for (var i = 0; i<getUserChoice.confirmLength;i++){
     var stagePassword= shuffle(optionPool);
     newPassword.push(stagePassword);
}
console.log(newPassword.join(""))
return newPassword.join("")


}