function capsocong(arr) {
  if (!Array.isArray(arr)) {
    return "du lieu khong hop le";
  }
  let result =true;
  arr.filter((element, index, arr) => {
    if (index >= 2) {
      if (arr[index] - arr[index - 1] !== arr[index - 1] - arr[index - 2]) {
        result =false
      }
    }
  });
  return result;
}

console.log(capsocong([2,4,6,8,10]));
console.log(capsocong([3,6,5,12,14]));
console.log(capsocong("abc"));

