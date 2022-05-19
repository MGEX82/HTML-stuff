'use strict';

let a = Array("hello", "everyone");
console.log(a.length);
console.log(a.push("Matt"));
console.log(a.push("is"));
console.log(a.push("here"));
console.log(a.length);
a.shift();
for (let eachElement of a) {
    console.log(eachElement);
}