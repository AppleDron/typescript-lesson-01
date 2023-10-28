// // Simple types
// let total: number = 100;
// let named: string = "Bob";
// let isActive: boolean = false;
// let empty: null = null;
// let undf: undefined = undefined;
const fruits = {
    apples: 15,
    banana: 30,
    orange: 30,
};
const frozenGoods = {
    iceCream: 25,
    fish: 30,
    berry: 10,
};
const books = {
    books: 20,
    magazines: "not found",
};
const Pens = {
    pens: 23,
    pencils: 19,
    highlighters: "not found",
};
// Generics
function identity(args) {
    return args;
}
let output1 = identity("This is my string");
let output2 = identity(12);
// Створіть загальну функцію reverse, яка приймає масив будь-якого типу і повертає масив у зворотньому порядку
function reverse(arr) {
    return arr.reverse();
}
const numbers = [1, 2, 3, 4, 5];
console.log(reverse(numbers));
const strings = ["One", "two", "three", "four", "five"];
console.log(reverse(strings));
// extends or keyof
function lengthOfObject(obj) {
    return obj.length;
}
lengthOfObject({ film: "Earth", length: 5 });
// Створіть загальну функцію getProperty, яка приймає об'єкт та ключ як рядок.
// Фнкція повинна повертати значення цього ключа з об'єкта
const getProperty = (obj, key) => {
    return obj[key];
};
const student = {
    name: "John",
    age: 25,
};
console.log(getProperty(student, "name"));
const updateTodo = (todo, fieldsToUpdate) => {
    return { ...todo, ...fieldsToUpdate };
};
const todo1 = {
    title: "Learn TypeScript",
    describtion: "Study the basics of TypeScript",
    completed: false,
};
const updatedTodo = updateTodo(todo1, {
    completed: true,
    describtion: "I learned TypeScript",
});
console.log(updatedTodo);
const john = {
    name: "John",
    age: 30,
};
// john.age = 31;  - помилка
const numbersArr = [1, 2, 3, 4, 5];
const person = {
    name: "John",
    age: 26,
    // adress: "Ukraine",
};
const database = {
    Kyiv: 2884000,
    Kharkiv: 1441000,
    Odesa: 1015000,
};
database.Lviv = 721301;
