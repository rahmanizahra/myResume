// Set
const fruits = ["apple", "banana", "orange", "cherry"];
const set = new Set();
for (fruit of fruits) {
    set.add(fruit);
}
console.log(set);
console.log(set.delete("banana"));
console.log(set);

const nums = [1, 2, 3, 4, 5, 6, 3, 2, 4, 5, 7, 8, 9, 1, 2, 4];
const uniqueNums = new Set(nums);
console.log(uniqueNums);

// destructuring
const numbers = [1, 2, 3];
let [oneNum, scdNum, ThrdNum] = numbers;
console.log(oneNum, scdNum, ThrdNum);

const person = {
    name: "zahra",
    age: 30,
    city: "Montreal"
}
const calcAge = pers => {
    return "Ms " + pers.name, pers.age + 10

}
console.log(calcAge(person));