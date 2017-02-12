// let & const
console.log("LET & CONST");

let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; // Won't work

// Block scope
function reset() {
  // console.log(variable);
  let variable = null;
  console.log(variable);
}
reset();
console.log(variable);


// Arrow Functions
console.log("ARROW FUNCTIONS");
const addNumbers = function (number1: number, number2: number): number {
  return number1 + number2;
};
console.log(addNumbers(10, 3));

const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(10, 3));

const greet = () => {
  console.log("Hello");
};
greet()

const greetFriend = friend => console.log(friend);
greetFriend("Manu");

// Default Parameters
console.log("DEFAULT PARAMETERS");
const countdown = (start: number = 10): void => {
  while (start > 0) {
    start--;
  }
  console.log("Done", start);
};
// countdown(10);
countdown();

// Rest & Spread
console.log("REST & SPREAD");
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers));

function makeArray(...args: number[]) {
  return args;
}
// console.log(makeArray("Scotty", 1, 2, 3, 6));

// Destructuring
console.log("DESTRUCTURING");
const myHobbies = ["Cooking", "Sports"];
// const hobby1 = myHobbies[0]
// const hobby2 = myHobbies[1]
// console.log(hobby1, hobby2);
const [ hobby1, hobby2 ] = myHobbies;
console.log(hobby1, hobby2);

const userData = { userName: "Scotty", age: 31 };
// const userName = userData.userName;
// const age = userData.age;
const {userName: myName, age:myAge} = userData;
console.log(myName, myAge);

// Template Literals
const userName = "Scotty";
const greeting = `Hello, I'm ${userName}`;
console.log(greeting);
