import { HashMap } from "./main.js";

const test = HashMap();
console.log(test.hash("Arlecchino"));

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

