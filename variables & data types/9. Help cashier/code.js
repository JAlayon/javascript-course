//Program input

//Amount due
var total = prompt("Total due: ");

//Amount paid by the customer
var moneyPaid = prompt("Amount paid: ");

//logic
total = parseFloat(total).toFixed(2);
moneyPaid = parseFloat(moneyPaid).toFixed(2);

var change = (moneyPaid - total).toFixed(2);

console.log("Due: $" + total + "/ Paid: $" + moneyPaid + "/ Change: $" + change);

//print change breakdown: dollars and coins
var value, text_money, to_return;
value = 50;
text_money = '$50 dollars: ';
to_return = Math.floor(change / value);
change = (change % value).toFixed(2);
to_return > 0 ? console.log(text_money + to_return) : 0;

value = 20;
text_money = '$20 dollars: ';
to_return = Math.floor(change / value);
change = (change % value).toFixed(2);
to_return > 0 ? console.log(text_money + to_return) : 0;

value = 10;
text_money = '$10 dollars: ';
to_return = Math.floor(change / value);
change = (change % value).toFixed(2);
to_return > 0 ? console.log(text_money + to_return) : 0;

value = 1;
text_money = '$1 dollars: ';
to_return = Math.floor(change / value);
change = (change % value).toFixed(2);
to_return > 0 ? console.log(text_money + to_return) : 0;

value = 0.5;
text_money = '50p coins: ';
to_return = Math.floor(change / value);
change = (change % value).toFixed(2);
to_return > 0 ? console.log(text_money + to_return) : 0;

value = 0.2;
text_money = '20p coins: ';
to_return = Math.floor(change / value);
change = (change % value).toFixed(2);
to_return > 0 ? console.log(text_money + to_return) : 0;


value = 0.1;
text_money = '10p coins: ';
to_return = Math.floor(change / value);
change = (change % value).toFixed(2);
to_return > 0 ? console.log(text_money + to_return) : 0;

value = 0.05;
text_money = '5p coins: ';
to_return = Math.floor(change / value);
change = (change % value).toFixed(2);
to_return > 0 ? console.log(text_money + to_return) : 0;

value = 0.01;
text_money = '1p coins: ';
to_return = Math.floor(change / value);
change = (change % value).toFixed(2);
to_return > 0 ? console.log(text_money + to_return) : 0;
