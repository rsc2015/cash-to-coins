console.log("cashToCoins.js");

//Convert the dollar amount into the coins that make up that dollar amount. 
//The final result is an object with the correct number of quarters, dimes, nickels, and pennies.


const dollarAmount = 1.68;
const piggyBank = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
}
//convert the cash amount into pennies
var con_pennies = dollarAmount * 100;
console.log(con_pennies);



//count the number of quarters in the change
if (con_pennies >= 25) {
    var sum_Amount_1 = con_pennies / 25;
    console.log(sum_Amount_1);
    piggyBank.quarters = Math.floor(sum_Amount_1);
    console.log(piggyBank.quarters)
    var quarters = Math.floor(sum_Amount_1) * 25; 
    console.log(quarters);
    //console.log(piggyBank.quarters);
    var remainder_1 = con_pennies - quarters;
    console.log(remainder_1);  

//for the remainder amount, count the number of dimes
    var sum_Amount_2 = remainder_1 / 10;
    console.log(sum_Amount_2);
    piggyBank.dimes = Math.floor(sum_Amount_2);
    console.log(piggyBank.dimes);
    var dimes = Math.floor(sum_Amount_2) * 10; 
    console.log(dimes);
    var remainder_2 = remainder_1 - dimes;
    console.log(remainder_2);  

//for the remainder amount, count the number of nickels
    var sum_Amount_3 = remainder_2 / 5;
    console.log(sum_Amount_3);
    piggyBank.nickels = Math.floor(sum_Amount_3);
    console.log(piggyBank.nickels);
    var nickels = Math.floor(sum_Amount_3) * 5; 
    console.log(nickels);
    var remainder_3 = remainder_2 - nickels;
    console.log(remainder_3);  

//for the remainder amount, count the number of pennies
    var sum_Amount_4 = remainder_3;
    console.log(sum_Amount_4);
    piggyBank.pennies = sum_Amount_4;
    console.log(piggyBank.nickels);
     
} 

console.log(piggyBank);