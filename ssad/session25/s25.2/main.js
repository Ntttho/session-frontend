function sumOfTwoNumber(a, b) {
  if (!isNaN(a) && !isNaN(b) && a % 1 == 0 && b % 1 == 0) {
    return `tong 2 so a va b la ${a + b}`;
  } else {
    return `du lieu khong hop le`;
  }
}

let a = Number(prompt("nhap vao so nguyen a"));
let b = Number(prompt("nhap vao so nguyen b"));
let result = sumOfTwoNumber(a, b);
console.log(result);
