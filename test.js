import { HashMap } from "./main.js";

const test = HashMap();

// testing while developing for capacity 16

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");

console.log(test.getBucketsForTest());

console.log(test.get("apple"));
console.log(test.get("banana"));
console.log(test.get("carrot"));

console.log(test.has("apple"));
console.log(test.has("banana"));
console.log(test.has("watermelon"));

console.log(test.remove("banana"));

console.log(test.getBucketsForTest());

console.log(test.length());

test.clear();

console.log(test.getBucketsForTest());

test.set("BWM", "red");
test.set("Audi", "yellow");
test.set("Mercedes", "orange");

console.log(test.getBucketsForTest());

console.log(test.keys());
console.log(test.values());
console.log(test.entries());

// tsting for capacity 16 and 32 (mostly 32)

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden');
test.set('moon', 'silver')


console.log(test.getBucketsForTest());

test.set("apple", "green");
// console.log(test.length());


console.log(test.getBucketsForTest());
console.log(test.length());

test.set("elephant", "white");
test.set("hat", "white");
test.set("dog", "white");

console.log(test.getBucketsForTest());
console.log(test.length());

console.log(test.get("frog"));
console.log(test.has("lion"));
console.log(test.remove("moon"));

console.log(test.getBucketsForTest());
console.log(test.length());

// test.clear(); // test succesfull
// console.log(test.getBucketsForTest());

console.log(test.keys());
console.log(test.values());
console.log(test.entries());



