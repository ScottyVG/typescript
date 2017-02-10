// string
var myName = 'Scotty';
// myName = 28;
// number
var myAge = 31.5;
// myAge = 'Scotty';
// boolean
var hasHobbies = true;
// hasHobbies = 1;
// assign types
var myRealAge;
myRealAge = 31;
// myRealAge = '31';
// array
var hobbies = ["Cooking", "Sports"];
// console.log(hobbies[0]);
// console.log(typeof hobbies);
hobbies = ["string"];
// tuples
var address = ["superstreet", 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; //2
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
// any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("Hello!");
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 'scotty'));
console.log(multiply(2, 10));
