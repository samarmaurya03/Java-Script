const a=4 // it is immutable
var b=6 // globle declearation
let c=9  // scope based variable
c="samar"
console.log(a);
console.log(b);
console.log(c);

{
  var b=8 // var it is difing again and again 
  c=5
  console.log(b);
  console.log(c)
}

// console.log(a);
  console.log(b);
  console.log(c);

// tyepof
console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))

//NaN is a number
let s = NaN
console.log(s);
console.log(typeof(s));

//Null is an object
let p = null 
console.log(p);
console.log(typeof(p));
