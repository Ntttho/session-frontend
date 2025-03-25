function capsocong(arr) {
  if (!Array.isArray(arr) || arr.length <= 2) {
    return "du lieu khong hop le";
  }
  let result = true;
  arr.filter((num, index, arr) => {
    if (index >= 2) {
      if (arr[index] - arr[index - 1] !== arr[index - 1] - arr[index - 2]) {
        result = false;
      }
    }
  });
  return result;
}
console.log(capsocong([0, -4, -8, -12]));
console.log(capsocong([2, 4, 6, 8, 11]));
console.log(capsocong("abcabc"));
