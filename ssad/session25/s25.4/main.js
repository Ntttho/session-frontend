let input = Number(prompt("nhap vao so nguyen bat ki"));

function checkPrimeNumber(prime) {
  if (isNaN(prime)) {
    return `du lie khong hop le`;
  }
  if (prime < 2) {
    return `khong phai so nguyen to`;
  } else {
    for (let i = 2; i <= Math.sqrt(prime); i++) {
      if (prime % i === 0) {
        return `khong phai so nguyen to`;
      }
    }
  }
  return `la so nguyen to`;
}

let result = checkPrimeNumber(input);
console.log(result);
