interface NamedPerson {
  firstName: string;
  age?: number;
  [propName: string]: any;
  greet(lastName: string): void;
}

function greet(person: NamedPerson) {
  console.log("Hello, " + person.firstName);
}

function changeName(person: NamedPerson) {
  person.firstName = "Brightin";
}

const person: NamedPerson = {
  firstName: "Scotty",
  // age: 31
  hobbies: ["hiking", "biking"],
  greet(lastName: string) {
    console.log("Hi, I am " + this.firstName + " " + lastName);
  }
};

// greet({firstName: "Max", age: 27});
changeName(person);
greet(person);
person.greet("Anything");

class Person implements NamedPerson {
  firstName: string;
  lastName: string;
  greet(lastName: string) {
    console.log("Hi, I am " + this.firstName + " " + lastName);
  };
}

const myPerson = new Person();
myPerson.firstName = "Scotty";
greet(myPerson);
myPerson.greet("Anything");