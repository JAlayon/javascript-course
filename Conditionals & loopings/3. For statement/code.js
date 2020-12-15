for (var i = 0; i < 5; i++) {
    console.log(i);
}

for (var i = 7; i >= 0; i--) {
    console.log(Math.pow(i, 2));
}

var shoppingList = ["bread", "milk", "eggs"];

for (var i = 0; i < shoppingList.length; i++) {
    console.log("item " + (i + 1) + ": " + shoppingList[i]);
}

var numberList = [1, 2, 3];
for (i = 0; i < numberList.length; i++) {
    numberList[i] += 10
}
console.log(numberList);