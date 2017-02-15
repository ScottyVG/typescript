function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Brightin";
}
var person = {
    firstName: "Scotty",
    // age: 31
    hobbies: ["hiking", "biking"],
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
// greet({firstName: "Max", age: 27});
changeName(person);
greet(person);
person.greet("Anything");
var Person = (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    ;
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = "Scotty";
greet(myPerson);
myPerson.greet("Anything");
