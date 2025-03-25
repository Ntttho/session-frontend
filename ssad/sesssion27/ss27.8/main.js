function solonnhat(x) {
  if (x % 1 !== 0) {
    return "du lieu khong hop le";
  }
  x = x.toString().split("");
  x.forEach((element, index, x) => {
    x[index] = Number(element);
  });
  x.sort(function (a, b) {
    return b - a;
  });
  x = x.join("");
  x = Number(x);
  console.log(`day so lon nhat ${x}`);
}
solonnhat(2941);
solonnhat(3875);
solonnhat("adf");
