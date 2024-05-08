// First typescript program
// let age: number = 20;

// Debugging logic in typescript
// if(age < 50)
//     age += 10;
// console.log(age);

// Built in data types
// If we don't specify the type, it will be any
// If we annotate the type and then remove the annotation, it will be of the same type
// let sales = 123_456_789; // First annotated to number
// let course: string = "TypeScript";
// let isPublished = true; // First annotated to boolean
// let level;

// Arrays
// let numbers: number[] = [1, 2, 3, 4, 5];
// numbers.map((n) => {
//     // Able to access all methods of number like toPrecision() as ts recognizes it as number
//     console.log(n.toPrecision(2));
// });

// Tuples a new type in typescript - fixed length array with fixed types
// let user : [number, string] = [1, 'Shrey']

// Enums - To represent a list of related constants
// PascalCase - First letter of each word is capitalized
// Using const in const enum to generate more optimized code in index.js
const enum Size {Small = 1, Medium, Large}
let mySize = Size.Medium;
console.log(mySize); // 2

