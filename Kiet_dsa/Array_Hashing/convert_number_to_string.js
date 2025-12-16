const prompt = require('prompt-sync')()
const convertNumberToString = () => {
   let userInput = parseInt(prompt('Enter your number: '))
   const numberArr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
   for(let i = 0; i<numberArr.length; i++){
    if(userInput - 1 == i){
        return numberArr[i]
    }
   }
        console.log("Greater than 9")
}
console.log(convertNumberToString())