/*
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
console.log(string1)
console.log(string2)
console.log(string3)

const string4 = new String("A String object");
console.log(string4)

let a = "samar"
console.log(a) //print hole string
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

// escap character 
// \ \r \t \n

console.log("samar\nrohan");
console.log("samar\trohan");
console.log("samar\rrohan");
let b="samar\"rohan" //if we want to print " so use escap character
console.log(b)
*/
// some fuctionality of string
/*let name = "samar"
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2)) // secound value are not pass soo the vale start to print given index 
console.log(name.slice(2,4)) // hear both argument are present but in this case secound argument are not include output is "ma"
let friend = "shubh"
let b = "        shubh      "
console.log(name.replace("sam","rao"));
console.log(name.concat(" if i say good so first name is ",friend," and he is so nice guy"))
console.log(b) // if we not use trim function
console.log(b.trim()) // if we use trim function extra space are trimed
*/

// some advased method
let m = "akanksha"
console.log(`samar is love ${m}`)  // if we use backtick " ` " so we have one fnctionality added we use variable in string 

let a = "samar"
a[4]="p" // it is not possible



//some qutions

let o = "samar have got 100 rs"
let p = Number.parseInt(o.slice(15,19))
console.log(typeof(o))
console.log(p);
console.log(typeof(p));
let q = "samar"
q[0]="t" // string is immutable
console.log(q)
