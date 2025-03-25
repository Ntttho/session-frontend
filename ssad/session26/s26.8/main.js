function primeAndOddNumber(number) {
  if (number <= 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}
function result(arr) {
  if (!Array.isArray(arr)) {
    return "du lieu khong hop le";
  }
  if (arr.length < 1) {
    return "mang khong co phan tu nao";
  }
  return arr.filter((member) => {
    return primeAndOddNumber(member) === true;
  });
}
console.log(result([]));
console.log(result("abc"));
console.log(result([1, 3, 2, 5, 7, 10, 11, 13]));
