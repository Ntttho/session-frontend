function chiamang(arr, n) {
  if (!Array.isArray(arr) || arr.length === 0 || n % 1 !== 0 || isNaN(n)) {
    return "du lieu khong hop le";
  }
  let newArray = [];
  for (let i = 0; i < arr.length; i += n) {
    newArray.push(arr.slice(i, i + n));
  }
  return newArray;
}
console.log(chiamang([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(chiamang(["a", "d"], "a"));
