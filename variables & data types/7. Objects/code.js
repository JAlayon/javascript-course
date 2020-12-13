var myPhone = {
    make: "Apple",
    model: "Iphone 11",
    warranty: true,
    color: "Space gray"
}
console.log(myPhone);
console.log(myPhone.model);

//change property
myPhone.model = "Iphone 12";
console.log(myPhone.model);

//add new property
myPhone.storage = "64 GB";
console.log(myPhone);

//delete property
delete myPhone.storage;
console.log(myPhone);

//with primitives
var x = 1;
var y = x;
x = 2;
console.log(y);

//with objects
var myOtherPhone = myPhone
console.log(myOtherPhone);
myPhone.color = "gray";
console.log(myPhone);
console.log(myOtherPhone);