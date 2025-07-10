let a = 5;
let b = 8;
c = a + b;
console.log(c);

var x = 5;
var x = 10;
console.log(x);

for (var i = 0; i < 5; i++) {
  for (var i = 0; i < 5; i++) {
    console.log("inner", i);
  }
  console.log(i);
}

var x = 10;
var y = 20;
console.log(typeof (y - x));

var x = 1.2;
var y = 2.3;
console.log(typeof (x + y));

var x = 1.2;
var y = 2.2;
console.log(typeof (x + y).toFixed(2));

var x = "ABC";
var y = "DEF";
console.log(x, y);

var x = "a";
var y = 20;
y = 21;
console.log(typeof x);

console.log(y, x);

let q = 30;
q = 31;
const p = 10;
//p = 11;

var x = 5;
var y = "5";

console.log((x !== y));




let variable1 = 10;

function demo(){
  let variable1 = 20;
  console.log("Variable",variable1);
}


demo()