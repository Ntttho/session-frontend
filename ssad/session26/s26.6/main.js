function date(arr) {
  if (!Array.isArray(arr)) {
    return "khong phai la mang";
  }
  if (arr.length < 1) {
    return "mang khong chua phan tu nao";
  }
  return arr.map((member) => {
    let check = new Date(member);
    return check;
  });
}
console.log(date(["11/02/2001", "3/22/2001", "10/12/2006"]));
