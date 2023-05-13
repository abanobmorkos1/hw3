function trollsBeGone(sentence) {
    const letters = ["a" , "e" , "i" , "o" , "u"];
    let trollBack = '';

    for(let i = 0; i < sentence.length ; i++){
        if(!letters.includes(sentence[i].toLowerCase())){
            trollBack+=sentence[i];
        }
    }
    return trollBack;
} 
console.log(trollsBeGone("This website is for losers LOL")); 

console.log(trollsBeGone("---------------------------------------------")); 

 const bankInfo = {
    savings : 1000,
    checkings : 3000,
    moneyMakret : 500,
    creditCard : 1300,
 }
const bankAccountSummary = (bankInfo) => {
    let bankTotal = ""
    
for ( let account in bankInfo) {
    bankTotal += bankInfo;
}
return bankTotal;
} 
const bankTotal = bankAccountSummary(bankInfo);
console.log(bankTotal); 

function inTheRed(bankTotal) {
  return bankTotal < 0;
}

const isNegative = inTheRed(bankTotal);
console.log(isNegative); 

