// Part A: JavaScript Utilities Library (Functions)

//  Build a mini utility library with reusable JavaScript functions.
// 1. Function Declaration: Hoisted  
Multiplication(5, 3);
function Multiplication(a, b) {
    console.log(a * b);
}

//example 2
Greetings();
function Greetings (name) {
    console.log("Hello" + " " + name + "!" );
}
Greetings("Lilit");



// 2. Function expression: Not hoisted
const Division = function(a, b) {
    console.log(a / b);
};
Division(10, 2);

// example 2
const GoodDay = function() {
    console.log("Have a good day!");
};
GoodDay();



// 3. Arrow function: Not hoisted
const Subtraction = (a, b) => {
    console.log(a - b);
};
Subtraction(10, 4);


// example 2
let Compliment = () => {
    console.log(["charming", "funny", "kindhearted"]);
};
Compliment();






// Part B: Scope Simulation & Analysis

// 1. global variable
let weather = "sunny";
function reportWeather() {
    console.log("The weather today is " + weather + ".");
}
reportWeather(); 


// 2. A var variable at function level.
function varScopeExample() {
    var mood = "happy";
    console.log("I am feeling " + mood + " today.");
}
varScopeExample();
// console.log(mood); // This will cause an error because 'mood' is not defined outside the function.


// 3. A let and const inside a block and a nested function that tries to access all declared variables.
function blockScopeExample() {
    let temperature = 25;
    const humidity = 60;

    if (temperature > 20) {
        let advice = "It's warm outside, wear light clothes.";
        console.log(advice);
    }

    function nestedFunction() {
        console.log("Temperature: " + temperature); // Accessible
        console.log("Humidity: " + humidity);       // Accessible
        // console.log("Advice: " + advice);        // This will cause an error because 'advice' is not accessible here.
    }
    nestedFunction();
}
blockScopeExample();





//3. Part C: Hoisting & TDZ Debugger

//  Simulate and explain how hoisting and temporal dead zone affect variable access.    Requirements:
// 1. Create examples for var, let, and const hoisting.
console.log("My name is ");
console.log(myVar); // Logs: undefined
var myVar = "Mariam";


// 2. let hoisting and TDZ
console.log("Example:");
try {
    console.log(myLet); // Throws ReferenceError
} catch (e) {
    console.log(e.toString());
}
let myLet = "I am a let variable.";


// 3. const hoisting and TDZ
console.log("Example:");
try {
    console.log(myConst); // Throws ReferenceError
} catch (e) {
    console.log(e.toString());
}
const myConst = "I am a const variable.";


// 4. Function hoisting
console.log("\nFunction Hoisting Example:");
hoistedFunction(); // Logs: "I am a hoisted function."
function hoistedFunction() {
    console.log("I am a hoisted function.");
}


// 5. Function expression hoisting
console.log("Example:");
try {
    nonHoistedFunction(); // Throws TypeError
} catch (e) {
    console.log(e.toString());
}
const nonHoistedFunction = function() {
    console.log("I am a non-hoisted function expression.");
};  
