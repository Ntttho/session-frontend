let arr1 = ["", false, 0, 5, 10, "hello world!"];
let arr2 = ["", false, 0, undefined, null];

let result1 = arr1.filter(Boolean);
let result2 = arr2.filter(Boolean); //[mang rong]

console.log(result1);
console.log(result2);
