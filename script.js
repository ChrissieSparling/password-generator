const resultDom = document.getElementById("result");
console.log (resultDom)
const lengthDOM = document.getElementById ("length");
console.log (lengthDOM)
const uppercaseDom = document.getElementById("uppercase");
console.log (uppercaseDom)
const numbersDOM = document.getElementById ("numbers");
console.log (numbersDOM)
const symbolsDom = document.getElementById("symbols");
console.log (symbolsDom)
const generatorbtn = document.getElementById ("GeneratePassword");
console.log (generatorbtn)

const form = document.getElementById("passwordGeneratorForm")
console.log (form)

const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
console.log (UPPERCASE_CODES)
const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
console.log (LOWERCASE_CODES)
const NUMBER_CODES = arrayFromLowToHigh(48, 57);
console.log (NUMBER_CODES)
const SYMBOL_CODES = arrayFromLowToHigh(33, 47);
console.log (SYMBOL_CODES)    
     concat(arrayFromLowToHigh(58, 64));
     concat(arrayFromLowToHigh(91, 96));
     concat(arrayFromLowToHigh(123, 126));

     let arrayFromLowToHigh = (low,high)=>
     console.log (arrayFromLowToHigh)

     const array =[];
     for (let i = low; i <= high;i++){
          array.push(i);
     }
     return arrayFromLowToHigh;
     
     generatorbtn.addEventListener("click btn:write password Text");



{
     const textarea = document.createElement("textarea");
     const passwordToCopy = resultDom.innerText,
     if ("!passwordToCopy"); return;
  };
     String.concat(string2,string3,string4,[])
form.addEventListener("submit", (e)=>
{e.preventDefault();
     addEventListener.preventdefault();
     const characterAmount = lengthDOM.value;
     const includeUppercase = uppercaseDOM.checked;
     const includeNumbers = NumbersDOM.checked;
     const includeSymbols = symbolsDOM.checked;
     const password = generatePassword(
          characterAmount,
          includeUppercase,
          includeNumbers,
          includeSymbols
     );
     resultDom.innerText = password;
});
     let generatePassword = 
     (
     "characterAmount",
     "includeUppercase",
     "includeNumbers",
     "includeSymbols");{
     }

     let charCodes = LOWERCASE_CODES();
     {
     if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CODES);
     if (includeSymbols) charCodes =charCodes.concat(SYMBOL_CODES)[1];
     if (includeNumbers) charCodes = charCodes.concat(NUMBERS_CODES)[1];
     else{
     }
     const passwordCharacters = [8,128];          for (let i = 0; i < characterAmount;i++){
          const characterCode = charCodes[Math.floor(math.random(1)* charCodes.length)];
          passwordCharacters.push(string.fromcharCode(characterCode));
     }
     return passwordCharacters.join("")
     };
     
