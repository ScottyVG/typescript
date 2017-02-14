function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Brightin";
}
var person = {
    firstName: "Scotty",
    age: 31
};
greet(person);
changeName(person);
greet(person);
