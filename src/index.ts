// // Simple types
// let total: number = 100;
// let named: string = "Bob";
// let isActive: boolean = false;
// let empty: null = null;
// let undf: undefined = undefined;

// // Неявний type
// let age = 10;
// age = 10;

// // type any
// let age1: any = 12;
// age1 = "Lol";
// age1 = false;

// // type unknown
// // let name1: unknown = 'Andrew'
// // name1 = 12
// // name1.toFixed();

// // Array type
// const numbers: number[] = [1, 2, 3, 4, 5, 6];
// numbers.push(12);

// // Object type
// type User = {
//   name: string;
//   age: number | string;
// };
// const user: User = {
//   name: "Andrew",
//   age: 12,
// };
// user.age = "12";

// // Custom type
// type eventType = "lesson" | "deadline";
// // const event: eventType = 'home'
// const evented: eventType = "lesson";

// // Union type
// type size = "small" | "medium" | "large";

// // Enum
// enum Sizes {
//   small = "small",
//   medium = "medium",
//   large = "large",
// }
// const button: size = "large";
// const button2: Sizes = Sizes.large;

// // function types
// // return something
// // function add(num1: number, num2: number): number {
// //   return num1 + num2;
// // }

// // console.log(add(2, 3));

// // Without return - void
// function add(num1: number, num2: number): void {
//   console.log(num1 + num2);
// }

// add(2, 3);

// type User1 = {
//   name: string;
// };

// function greating(user: User1): void {
//   console.log(`Hello, ${user.name}`);
// }

// type User2 = {
//   name: string;
//   age: number;
//   hobby: string;
// };

// function userConstructor(name: string, age: number, hobby: string): User2 {
//   return {
//     name,
//     age,
//     hobby,
//   };
// }

// type Car = {
//   color: string;
//   price: number;
//   currency: string;
//   start: (color: string) => {};
// };

// const Car = {
//   color: "red",
//   price: 1000,
//   currency: "UAH",
//   start(color) {
//     console.log("Start" + this.color);
//   },
// };

// type UserType = {
//   name: string;
//   age: number;
//   role?: string;
// };

// const user3: UserType = {
//   name: "bob",
//   age: 12,
// };

// const admin: UserType = {
//   name: "John",
//   age: 23,
//   role: "Admin",
// };

// Index Properties
type Goods = {
  [key: string]: number;
};

const fruits: Goods = {
  apples: 15,
  banana: 30,
  orange: 30,
};

const frozenGoods: Goods = {
  iceCream: 25,
  fish: 30,
  berry: 10,
};

// Визначте інтерфейс для об'єкта, де ключем є рядок, а значення може бути рядок або число.
// Створіть декілька об'єктів цього типу.

type ShoppingItems = {
  [key: string]: number | string;
};

const books: ShoppingItems = {
  books: 20,
  magazines: "not found",
};

const Pens: ShoppingItems = {
  pens: 23,
  pencils: 19,
  highlighters: "not found",
};

// Generics
function identity<T>(args: T): T {
  return args;
}

let output1 = identity<string>("This is my string");
let output2 = identity<number>(12);

// Створіть загальну функцію reverse, яка приймає масив будь-якого типу і повертає масив у зворотньому порядку

function reverse<T>(arr: T[]): T[] {
  return arr.reverse();
}

const numbers: number[] = [1, 2, 3, 4, 5];
console.log(reverse(numbers));

const strings: string[] = ["One", "two", "three", "four", "five"];
console.log(reverse(strings));

// extends or keyof
function lengthOfObject<T extends { length: number }>(obj: T): number {
  return obj.length;
}

lengthOfObject({ film: "Earth", length: 5 });

// Створіть загальну функцію getProperty, яка приймає об'єкт та ключ як рядок.
// Фнкція повинна повертати значення цього ключа з об'єкта

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

const student = {
  name: "John",
  age: 25,
};

console.log(getProperty(student, "name"));

// Patrial<T>
type Todo = {
  title: string;
  describtion: string;
  completed: boolean;
};

const updateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>): Todo => {
  return { ...todo, ...fieldsToUpdate };
};

const todo1: Todo = {
  title: "Learn TypeScript",
  describtion: "Study the basics of TypeScript",
  completed: false,
};

const updatedTodo = updateTodo(todo1, {
  completed: true,
  describtion: "I learned TypeScript",
});
console.log(updatedTodo);

// Readonly
type User = {
  name: string;
  age: number;
};

const john: Readonly<User> = {
  name: "John",
  age: 30,
};

// john.age = 31;  - помилка

const numbersArr: ReadonlyArray<number> = [1, 2, 3, 4, 5];

// numbersArr.push(6); - error

// Pick<T,K>
// type Person = {
//   name: string;
//   age: number;
//   adress: string;
// };

// type PersonSummary = Pick<Person, "name" | "age">;

// const person: PersonSummary = {
//   name: "Andrew",
//   age: 26,
// };

// Omit<T, K>
type Person = {
  name: string;
  age: number;
  adress: string;
};

type PersonWithounAdress = Omit<Person, "adress">;

const person: PersonWithounAdress = {
  name: "John",
  age: 26,
  // adress: "Ukraine",
};

// Record<K, T>
type CityDataBase = Record<string, number>;

const database: CityDataBase = {
  Kyiv: 2884000,
  Kharkiv: 1441000,
  Odesa: 1015000,
};

database.Lviv = 721301;
