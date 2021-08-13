/*
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


// Loop through arrays
for(let todo of todos) {
    console.log(todo.id);
}

// High Order Array Methods
// forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);


const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
}



// Conditionals
const x = 6;
const y = 11;

if(x > 5 && y > 10) {
    console.log('x is more than 5 or y is more than 10');
}



if (x > 5 || y > 10) {
    console.log('x is more than 5 or y is more than 10');
} 
*/

/*
else if(x > 10) {
    console.log('x is greater than 10');
} 
else {
    console.log('x is less than 10');
}


// Ternary Operator
const x = 10;

const color = x > 10 ? 'red' : 'blue';

console.log(color);



// Switches
const x = 11;

const color = x > 10 ? 'red' : 'blue';

switch(color) {
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is NOT red or blue');
        break;
}



// Functions
function addNums(num1 = 1, num2 = 2) {
    return num1 + num2;
}

console.log(addNums(5, 5));


// Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}



// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person2.getFullName());
console.log(person1.getBirthYear());
console.log(person1.getFullName());

// Dom/Dawn?
// Single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));

// Multiple element
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));

*/
