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
// console.log(myColor);
// any
var car = "BMW";
// console.log(car);
car = { brand: "BMW", series: 3 };
// console.log(car);
// functions
function returnMyName() {
    return myName;
}
// console.log(returnMyName());
// void
function sayHello() {
    console.log("Hello!");
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 'scotty'));
// console.log(multiply(2, 10));
// function types
// let myMultiply: (a: number, b: number) => number;
// myMultiply = sayHello;
// myMultiply();
// myMultiply = multiply;
// console.log(myMultiply(5, 2));
// objects
var userData = {
    name: "Scotty",
    age: 31
};
// userData = {
//   a: "a",
//   b:22
// }
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 31;
myRealRealAge = "31";
// myRealRealAge = true;
// check types
var finalValue = 30;
if (typeof finalValue == "number") {
}
// never
// function neverReturns(): never {
//   throw new error('An error!');
// }
// Nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
// canThisBeAny = 12; 
