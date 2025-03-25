function squareAndEvenNumber(arr) {
  if (!Array.isArray(arr)) {
    return "du lieu khong hop le";
  }
  if (arr.length < 1) {
    return "mang khong co du lieu";
  }
  arr.forEach((number, index, arr) => {
    arr[index] = number ** 2;
  });
  // muon thay doi truc mang bang for each thi ta phai truy cap vao truc tiep mang chu khong phai element (tung phan tu cua mang)
  return arr.filter((Number) => {
    return Number % 2 == 0;
  });
}
console.log(squareAndEvenNumber([5, 10, 12, 20, 12]));
console.log(squareAndEvenNumber([]));
console.log(squareAndEvenNumber("kfkajhsdfk"));
