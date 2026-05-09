// Different types of arrays
let numbers = [1, 2, 3, 4];
let fruits = ["apple", "banana", "mango"];
let mixed = [1, "hello", true];

// push (add to end)
fruits.push("orange");
console.log("After push:", fruits);

// pop (remove last)
fruits.pop();
console.log("After pop:", fruits);

// unshift (add to beginning)
fruits.unshift("grape");
console.log("After unshift:", fruits);

// shift (remove first)
fruits.shift();
console.log("After shift:", fruits);

// length
console.log("Array length:", fruits.length);

//create object
let person = {
    name: "Jonel",
    age: 20,
    isStudent: true
};

//Access Object Properties
// Dot notation
console.log(person.name);

// Bracket notation
console.log(person["age"]);

// Modify values
person.age = 19;
person["name"] = "Ventura";

console.log("Updated object:", person);

//Array Processing Methods
let nums = [1, 2, 3, 4, 5];

// map (create new array)
let squared = nums.map(n => n * n);
console.log("Squared:", squared);

// filter (condition)
let even = nums.filter(n => n % 2 === 0);
console.log("Even numbers:", even);

// forEach (loop)
nums.forEach(n => {
    console.log("Number:", n);
});

//Combining Objects and Arrays
let students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 75 },
    { name: "Charlie", grade: 85 }
];

// Access data
students.forEach(student => {
    console.log(student.name, "-", student.grade);
});

// Filter students with grade > 80
let topStudents = students.filter(s => s.grade > 80);
console.log("Top students:", topStudents);

// Add new student
students.push({ name: "David", grade: 88 });
console.log("Updated students:", students);