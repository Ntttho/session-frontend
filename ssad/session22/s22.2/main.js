let array = [2, 5, 7, 4, 1, 9, 6];
let num1 = parseInt(prompt("nhap vao so ban chon"));
let check = 0;
for (let i = 0; i < array.length; i++) {
  if (num1 === array[i]) {
    console.log("bingo");
    check = 1;
    break;
  }
}
if (check === 0) {
  console.log("chuc ban may man lan sau");
}
