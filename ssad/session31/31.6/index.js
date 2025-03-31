let form = document.getElementById("form");
form.addEventListener("submit", function () {
  event.preventDefault();
  let user = document.getElementById("Username");
  let pass = document.getElementById("password");
  let ten = user.value;
  let mk = pass.value;
  if (ten === "huanrose@gmail.com") {
    if (mk === "12456") {
      console.log("oke dang nhap thanh cong");
    } else {
      console.log      ("sai mat khau kia m");
    }
  } else {
    console.log    ("sai mia roi");
  }
});
