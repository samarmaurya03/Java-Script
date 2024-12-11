var a = Math.floor(Math.random() * 10); 
var count = 0;
while (true) {
    let b = parseInt(prompt("Enter your value"));  
    if (a === b) { 
        console.log("You win! Your score is =", count);
        break; 
    } else if (b > a) {
        console.log("Your number is greater than the generated number."); 
        count++;
    } else if (b < a) { 
        console.log("Your number is less than the generated number.");
        count++;
    }
}