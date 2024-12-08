/* //for and disct and object
let obj ={
//     Physics:52,
     Chamistry:52,
   Bio:52,
   Maths:52
}

 for(let a in obj){
     console.log(a)
 }
 console.log(a)
 for ( a of "samar"){
     console.log(a)
 }

//2nd method
let ob ={
    Physics:8398,
    Chamistry:52,
    Bio:52,
    Maths:52
}

// object.keys is ch
for(let i=0;i< Object.keys(ob).length;i++){
    console.log(Object.keys(ob)[i],"=",ob[Object.keys(ob)[i]]);
}


for(let i=0;i< Object.keys(ob).length;i++){
    console.log(Object.keys(ob)[i],"=",ob[Object.keys(ob)[i]]);
}
*/

// advanse version of loop
/*
let a=[,1,2,4,3,9,4]

for (let i = 0; i < a.length; i++) { // classical for loop
    console.log(a[i]);
}
console.log('\n');
// for each loop
a.forEach(element => {
    console.log(element);
});
*/
// arr.from loop, it is convert to arr any object as html collection ex:-
let b = 'samar'

//if we print thi 

console.log(b); 
console.log(typeof(b[0])); //it is not a arr or object

let arr = b.from (b)

console.log(b); 
console.log(typeof(b));