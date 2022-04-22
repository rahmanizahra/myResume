//working with DOM model
document.getElementById("head").innerHTML = "This is an inner HTML attribute";
const child1 = document.createElement("h4");
child1.innerHTML = "I am child 1";
const first = document.getElementById("first");
first.appendChild(child1);
const child2 = document.createElement("h5");
child2.innerHTML = "I am child 2";
const second = document.getElementById("second");
second.appendChild(child2);

function callAfterThreeSeconds() {
    const time = 3;
    // console.log('call after: ',time+'seconds');
    console.log(`Called after: ${time} seconds`);
}
callAfterThreeSeconds();
// setTimeout(callback function,delay)//takes two parameters

setTimeout(() => {
    const time = 3;
    console.log(`Called after: ${time} seconds`);
}, 3000);
//without calling, it willl work!!

///Arrays
//multiple each element by two

const arrayOfNumbers = [10, 20, 30, 40, 50];
let results = [];
for (let i = 0; i < arrayOfNumbers.length; i++) {
    results.push(arrayOfNumbers[i] * 2);
}
console.log(results);

//.map() function is a higher order function used in array:

const results2 = arrayOfNumbers.map(n => n * 2) //points to every array elements
console.log(results2);