let string = prompt("nhap vao password");
function isStrongPassword(password) {
  if (password.lenght < 8) {
    return false;
  }
  if (
    !/[a-z]/.test(password) ||
    !/[A-Z]/.test(password) ||
    !/[0-9]/.test(password)
  ) {
    return false;
  }
  return true;
}
console.log(isStrongPassword(string));
