let a = +prompt("nhap so a");
let b = +prompt("nhap so b");
let c = +prompt("nhap so c");
let denta = Math.pow(b, 2) - 4 * a * b;
let x1 = (0 - b - Math.sqrt(denta)) / (2 * a);
let x2 = (0 - b + Math.sqrt(denta)) / (2 * a);

console.log(`gia tri x1: ${x1} va gia tri x2: ${x2}`);
