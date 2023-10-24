// Simple types
let total = 100;
let named = "Bob";
let isActive = false;
let empty = null;
let undf = undefined;
// Неявний type
let age = 10;
age = 10;
// type any
let age1 = 12;
age1 = "Lol";
age1 = false;
// type unknown
// let name1: unknown = 'Andrew'
// name1 = 12
// name1.toFixed();
// Array type
const numbers = [1, 2, 3, 4, 5, 6];
numbers.push(12);
const user = {
    name: "Andrew",
    age: 12,
};
user.age = "12";
// const event: eventType = 'home'
const evented = "lesson";
// Enum
var Sizes;
(function (Sizes) {
    Sizes["small"] = "small";
    Sizes["medium"] = "medium";
    Sizes["large"] = "large";
})(Sizes || (Sizes = {}));
const button = "large";
const button2 = Sizes.large;
// function types
// return something
// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }
// console.log(add(2, 3));
// Without return - void
function add(num1, num2) {
    console.log(num1 + num2);
}
add(2, 3);
function greating(user) {
    console.log(`Hello, ${user.name}`);
}
function userConstructor(name, age, hobby) {
    return {
        name,
        age,
        hobby,
    };
}
const Car = {
    color: "red",
    price: 1000,
    currency: "UAH",
    start(color) {
        console.log("Start" + this.color);
    },
};
const user3 = {
    name: "bob",
    age: 12,
};
const admin = {
    name: "John",
    age: 23,
    role: "Admin",
};
