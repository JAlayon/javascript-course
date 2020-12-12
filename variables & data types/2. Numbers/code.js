var x = 1;
console.log(typeof x);

//fractional numbers
var y = 2.4;


//5.3 + 10^8
var z = 5.3e8
console.log(z);

//max min in JS
var max = Number.MAX_VALUE
var min = Number.MIN_VALUE
console.log(max);
console.log(min);


//arithmetic operations
var a = 4 + 9;
console.log(a);

a = 3 * 4;
console.log(a);

a = y - x;
console.log(a);

var b = 3;
b += 2;
b++;
console.log(b);

b -= 1;
b--;
console.log(b);

//Operatos precedence
var c = 4 * (5 + 3);
var d = ++c;
console.log(c);
console.log(d);

var e = c++;
console.log(c);
console.log(e);

//remainder operator
var f = 17 % 3;
console.log(f);

//exponent operator
var g = 3 ** 3
console.log(g);

//Inifinity
var h = Infinity;
console.log(h);
console.log(3 / 0);


//NaN
var i = 0 / 0;
console.log(i); //No meaningful result

//power method
var j = Math.pow(2, 5);
console.log(j);

//big number
var k = Math.pow(2, 2000);
console.log(k);

//parse a string and return an integer
var number = '3';
console.log(typeof parseInt(number));