// let & const
console.log("LET & CONST");
var variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; // Won't work
// Block scope
function reset() {
    // console.log(variable);
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// Arrow Functions
console.log("ARROW FUNCTIONS");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 3));
var greet = function () {
    console.log("Hello");
};
greet();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend("Manu");
// Default Parameters
console.log("DEFAULT PARAMETERS");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    console.log("Done", start);
};
// countdown(10);
countdown();
// Rest & Spread
console.log("REST & SPREAD");
var numbers = [1, 10, 99, -5];
console.log(Math.max.apply(Math, numbers));
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
// console.log(makeArray("Scotty", 1, 2, 3, 6));
// Destructuring
console.log("DESTRUCTURING");
var myHobbies = ["Cooking", "Sports"];
// const hobby1 = myHobbies[0]
// const hobby2 = myHobbies[1]
// console.log(hobby1, hobby2);
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var userData = { userName: "Scotty", age: 31 };
// const userName = userData.userName;
// const age = userData.age;
var myName = userData.userName, myAge = userData.age;
console.log(myName, myAge);
// Template Literals
var userName = "Scotty";
var greeting = "Hello, I'm " + userName;
console.log(greeting);
