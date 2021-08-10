// var, let, const

let score;

score = 10;

console.log(score);


// Data Types: String, Numbers, Boolean, null, undefined, Symbol

const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

// Strings
// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template String
console.log(`My name is ${name} and I am ${age}`);

const s = 'technology, computers, it, code';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 5));
console.log(s.split(', '));

// Arrays - variables that hold multiple values
const fruits = ['apples', 'oranges', 'pears'];

fruits[3] = 'grapes';

fruits.push('mangos');

fruits.unshift('strawberries');

fruits.pop();

console.log(Array.isArray(fruits));

console.log(fruits.indexOf('oranges'));

console.log(fruits);

// Object literals - key value pairs
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);

const { firstName, lastName, address: { city } } = person;
console.log(city);


// Array of objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },

    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },

    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: true
    }
];

console.log(todos[1].text);

// Send the above Arrays to JSON and Send data to the server
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For Loops
for (let i = 0; i < 10; i++) {
    console.log(i);
}

/*
// While Loops
let i = 0;
while(1 < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}
*/
