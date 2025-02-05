const numbers = [1, 2, 3];

numbers.forEach((number, index, array) => {
    // numbers[index] += 2;
    // console.log(array)
    array[index] += 2;
});

// console.log(numbers);


const prices = [30, 40, 50, 60];

const filteredPrices = prices.filter((price) => price > 40);

// console.log(filteredPrices);

const fruits = ['banana', 'avocado', 'custard apple'];

const uppercaseFruits = fruits.map((fruit) => fruit.toUpperCase());

// console.log(uppercaseFruits);


const items = [
    {name : 'Bike', price : 100000},
    {name : 'TV', price : 40000},
    {name : 'iPhone', price : 150000}
]

const vehicleNames = items.map((item) => item.name);

// console.log(vehicleNames);

const rawPrices = [22.445, 44.555, 90.8999];

const trimedPrices = rawPrices.map((price) => `Rs. ${price.toFixed(2)}`);

// console.log(trimedPrices);

const students = [
    {name : 'John', grade : 80},
    {name : 'Jai', grade : 90},
    {name : 'Sai', grade : 40},
    {name : 'Ankit', grade : 60}
];

const topStudent = students.find((student) => student.grade > 80);

// console.log(topStudent);


const allTopStudents = students.every((student) => student.grade > 30); // returns {true, false} based on if all elements returns true for the condition, then the final value will be true, otherwise false.

// console.log(allTopStudents);

const arrayToSort = [4, 9, 10, 11, 29];

console.log(arrayToSort.sort((a, b) => a - b));
