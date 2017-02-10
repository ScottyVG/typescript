// string
let myName: string = 'Scotty';
// myName = 28;

// number
let myAge: number = 31.5;
// myAge = 'Scotty';

// boolean
let hasHobbies: boolean = true;
// hasHobbies = 1;

// assign types
let myRealAge: number;
myRealAge = 31;
// myRealAge = '31';

// array
let hobbies: any[] = ["Cooking", "Sports"];
// console.log(hobbies[0]);
// console.log(typeof hobbies);
hobbies = ["string"];

// tuples
let address: [string, number] = [ "superstreet", 99];

// enum
enum Color {
  Gray, //0
  Green = 100, //100
  Blue = 2 //2
}
let myColor: Color = Color.Blue;
console.log(myColor);

// any
let car: any = "BMW";
// console.log(car);
car = { brand: "BMW", series: 3 };
// console.log(car);

// functions
function returnMyName() {
  return myName;
}
// console.log(returnMyName());

// void
function sayHello(): void {
  console.log("Hello!");
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
// console.log(multiply(2, 'scotty'));
// console.log(multiply(2, 10));

// function types
let myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = sayHello;
myMultiply();