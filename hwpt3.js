console.log("setAlarm---------------------------------------------"); 
const setAlarm = (employed, vacationing) => {
    if (employed && !vacationing) {
      console.log(true);
    } else {
      console.log(false);
    }
  };
  setAlarm(true, true) // => returns false
  setAlarm(false, false) // => returns false
  setAlarm(false, true) // => returns false
  setAlarm(true, false) // => returns true
  
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
console.log("TrollsBeGone--------------------------------------------"); 
console.log(trollsBeGone("This website is for losers LOL")); 

console.log("bankAccountSummary---------------------------------------------"); 

 const bankInfo = {
    savings : 1000,
    checkings : 3000,
    moneyMakret : 500,
    creditCard : 1300,
 }
function bankAccountSummary  (){
   const total = bankInfo.savings + bankInfo.checkings + bankInfo.moneyMakret + bankInfo.creditCard
   console.log(`Total balance ${total}`)

}
bankAccountSummary()