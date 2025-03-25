function sumOfOssOrEven(arr) {
  if (!Array.isArray(arr)) {
    return "du lieu khong hop le";
  }
  if (arr.length === 0) {
    return "mang khong chua phan tu nao";
  }
  return arr.reduce(
    (odd_even, member) => {
      member % 2 === 0
        ? (odd_even[0] = odd_even[0] + member)
        : (odd_even[1] = odd_even[1] + member);
      return odd_even;
    },
    [0, 0]
  );
}
// trong ham phai co return
console.log(sumOfOssOrEven([1, 2, 3, 4, 5, 6]));
