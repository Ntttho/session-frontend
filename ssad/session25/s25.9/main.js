function fillEmail(user) {
  let count = user.length;
  let email = prompt("nhap vao email dang ki");
  if (!email.includes("@", 0)) {
    return "false";
  }
  if (email.endsWith(".com", 5) || email.endsWith(".vn", 5)) {
    return "false";
  }
  for (let i = 0; i < user.length; i++) {
    if (user[i] === email) {
      return "da ton tai";
    }
  }
  user[count] = email;
  count++;
  return "fill thanh cong!";
}

let users = [];

console.log(fillEmail(users));
console.log(users);
