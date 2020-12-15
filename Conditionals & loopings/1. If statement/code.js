var balance = 5000;
var price = 10;
if (price < balance) {
    console.log('payment successful');
    balance -= price;
} else {
    console.log('You dont have enough funds!');
}

var speed = 50;

if (speed > 70) {
    console.log('You are going too fasts');
} else if (speed < 40) {
    console.log('You are going too slow');
} else {
    console.log('Your speed is fine');
}