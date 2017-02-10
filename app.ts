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
// console.log(myColor);

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
// let myMultiply: (a: number, b: number) => number;
// myMultiply = sayHello;
// myMultiply();
// myMultiply = multiply;
// console.log(myMultiply(5, 2));

// objects
let userData: { name: string, age: number } = {
  name: "Scotty",
  age: 31
};
// userData = {
//   a: "a",
//   b:22
// }

// complex object
let complex: { data: number[], output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],

  output: function (all: boolean): number[] {
    return this.data;
  }
}

// type alias
type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [100, 3.99, 10],

  output: function (all: boolean): number[] {
    return this.data;
  }
}

// union types
let myRealRealAge: number | string = 31;
myRealRealAge = "31";
// myRealRealAge = true;

// check types
let finalValue = 30;
if (typeof finalValue == "number") {
  // console.log("Final value is a number");
}

// never
// function neverReturns(): never {
//   throw new error('An error!');
// }

// Nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
// canThisBeAny = 12;