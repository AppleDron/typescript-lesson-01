// Simple types
let total: number = 100;
let named: string = "Bob";
let isActive: boolean = false;
let empty: null = null;
let undf: undefined = undefined;

// Неявний type
let age = 10;
age = 10;

// type any
let age1: any = 12;
age1 = "Lol";
age1 = false;

// type unknown
// let name1: unknown = 'Andrew'
// name1 = 12
// name1.toFixed();

// Array type
const numbers: number[] = [1, 2, 3, 4, 5, 6];
numbers.push(12);

// Object type
type User = {
  name: string;
  age: number | string;
};
const user: User = {
  name: "Andrew",
  age: 12,
};
user.age = "12";

// Custom type
type eventType = "lesson" | "deadline";
// const event: eventType = 'home'
const evented: eventType = "lesson";

// Union type
type size = "small" | "medium" | "large";

// Enum
enum Sizes {
  small = "small",
  medium = "medium",
  large = "large",
}
const button: size = "large";
const button2: Sizes = Sizes.large;

// function types
// return something
// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }

// console.log(add(2, 3));

// Without return - void
function add(num1: number, num2: number): void {
  console.log(num1 + num2);
}

add(2, 3);

type User1 = {
  name: string;
};

function greating(user: User1): void {
  console.log(`Hello, ${user.name}`);
}

type User2 = {
  name: string;
  age: number;
  hobby: string;
};

function userConstructor(name: string, age: number, hobby: string): User2 {
  return {
    name,
    age,
    hobby,
  };
}

type Car = {
  color: string;
  price: number;
  currency: string;
  start: (color: string) => {};
};

const Car = {
  color: "red",
  price: 1000,
  currency: "UAH",
  start(color) {
    console.log("Start" + this.color);
  },
};

type UserType = {
  name: string;
  age: number;
  role?: string;
};

const user3: UserType = {
  name: "bob",
  age: 12,
};

const admin: UserType = {
  name: "John",
  age: 23,
  role: "Admin",
};
