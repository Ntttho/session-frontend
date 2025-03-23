let arr1 = [11, 4, 65, 6];
let arr2 = [1, 3, 5, 17];
let arr3 = ["text"];
function checkEvenNumber(arr) {
  let arrEvenNumber = [];
  let count = 0;
  for (let member of arr) {
    if (member % 2 === 0) {
      arrEvenNumber[count] = member;
      count++;
    }
    if (isNaN(member)) {
      return `du lieu khong hop le`;
    }
  }
  if (count == 0) {
    return "mang khong chua so chan";
  } else {
    return arrEvenNumber;
  }
}
let result1 = checkEvenNumber(arr1);
let result2 = checkEvenNumber(arr2);
let result3 = checkEvenNumber(arr3);
console.log(result1);
console.log(result2);
console.log(result3);
