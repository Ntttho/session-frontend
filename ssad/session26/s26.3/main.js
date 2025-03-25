function validEmail(arr) {
  if (!Array.isArray(arr)) {
    return "du lieu khong hop le";
  }
  if (arr.length === 0) {
    return "mang khong co phan tu nao";
  }
  return arr.filter(
    (member) =>
      member.endsWith(".net") ||
      (member.endsWith(".com") && member.includes("@") && !member.includes(" "))
  );
}
let check1 = [
  "john.doe@gmail.com",
  "invalidemail.com",
  "hello@domain.net",
  " @out,com",
];
let result1 = validEmail(check1);
console.log(result1);
let result2 = validEmail([]);
console.log(result2);
let result3 = validEmail("123sadfd");
console.log(result3);