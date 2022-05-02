//Higher order function
const callBack = n => n * 2;

function cube(callBack, n) {
    return callBack(n) * n
}
console.log(cube(callBack, 3));

// reduce 
const numbers = [1, 2, 3];
const sum = numbers.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
}, 0);
console.log(sum);

// map

const fruit = ["apple", "banana", "cucumber"];
const newFruit = fruit.map(n => n.charAt(1));
console.log(newFruit);

// filter

const car = ["pride", "toyota", "bmw"];
const newCar = car.filter(n => n.length > 3);
console.log(newCar);

// setTimeout
// function print() {
//     console.log("Hello setTimeout");
// }
setTimeout(() => console.log("Hello setTimeout"), 5000);

// find()=>return the first element that matches the situation
const num = [1, 2, 3];
const big = num.find(n => n > 1);
console.log(big);


// setInterval

// function sayHello() {
//     console.log("Hello!")
// }
// setInterval(sayHello, 4000);