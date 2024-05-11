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
// const enum Size {Small = 1, Medium, Large}
// let mySize = Size.Medium;
// console.log(mySize); // 2

// Functions
// Really strict syntax in typescript to avoid errors in future
// 3 config settings enabled for functions -
// noUnusedLocals(checks for variables not being used), noUnusedParameters(checks for parameters not being used), noImplicitReturns(checks if the returned value is of the correct datatype)
// Data type of parameters and return type is useful to avoid errors and a default value can be provided to the parameters.
// function calculateTax(income: number, taxYear = 2021): number{
//     if(taxYear < 2022){
//         console.log(income * 1.2);
//         return income * 1.3;}
//     return income;
// }
// // No additional parameters can be passed to the function, they can avoid a parameter if it has a default value
// calculateTax(10_000)

// // Objects
// let employee: {
//   id: number;
//   name: string;
//   return: (date: Date) => void;
// } = {
//   id: 1,
//   name: "Shrey",
//   return: (date: Date) => {
//     console.log(date);
//     console.log(employee.name);
//   },
// };
// employee.name = `Rahul`;
// employee.return(new Date());

// Type Aliases - TTo reuse the type definitioninstead of creating it again and again
// type Employee = {
//   id: number;
//   name: string;
//   return: (date: Date) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: "Shrey",
//   return: (date: Date) => {
//     console.log(date);
//     console.log(employee.name);
//   },
// };

// Union Types - To allow multiple types for a variable
// Union type is not a part of compiled js code it's purely for the compiler to typecheck.
function kgToLbs(weight: number | string) {
  // Type Guard - To check the type of the variable , narrowing down the types
  if(typeof weight === 'number')
    return weight * 2.2;
  else 
    return parseInt(weight) * 2.2;
  
}

kgToLbs(50);
kgToLbs("50kg");
