//conditional statements
//Leap year Checker
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

let year = parseInt(prompt("Enter a year:"));
if (isLeapYear(year)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}



//Ticket pricing system
function getTicketPrice(age) {
    let price;
    switch (true) {
        case (age <= 12):
            price = 10;
            break;
        case (age >= 13 && age <= 17):
            price = 15;
            break;
        case (age >= 18):
            price = 20;
            break;
        default:
            price = 0; // In case age is somehow not valid
    }
    return price;
}


let age = parseInt(prompt("Enter your age:"));
let price = getTicketPrice(age);
console.log(`The price of the movie ticket is $${price}.`);



//recursive Functions

//fibonacci sequence
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}


let n = parseInt(prompt("Enter the position in the Fibonacci sequence:"));
let result = fibonacci(n);
console.log(`The ${n}th Fibonacci number is ${result}.`);


//power Function

function power(base, exponent) {
    if (exponent === 0) return 1;
    if (exponent < 0) return 1 / power(base, -exponent);
    return base * power(base, exponent - 1);
}

// Example usage:
let base = parseFloat(prompt("Enter the base number:"));
let exponent = parseInt(prompt("Enter the exponent:"));
let answer = power(base, exponent);
console.log(`${base} raised to the power of ${exponent} is ${answer}.`);

