//Booleans
var x = 3;
var y = 5;
var z = x > y;
console.log(z);

//Logical operators
z = (x < y) && (x > 0);
console.log(z);
z = false || true;
z = !false;
console.log(z);

z = false && true || true;
console.log(z);

//Unary Operator
z = x > 4 ? 'Pass' : 'Fail';
console.log(z);


//Logical operators with non booleans
console.log(0 == false);
z = true && 'apple';
console.log(z);

var fruit;
console.log(fruit);
console.log(fruit == false);
z = fruit || 'apple';
console.log(z);

console.log('' == false);
z = '' || 'apple';
console.log(z);

z = '' && false;
console.log(z);
