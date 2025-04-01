let form = document.getElementById("form");
let form1 = document.getElementById("form1");

form.addEventListener("submit", function (event) {
  let check = document.getElementById("check");
  event.preventDefault();
  let infor = form.email.value;
  if (checkEmail(infor) === 0) {
    check.innerHTML = "email khong hop le!";
    check.style.color = "red";
  } else {
    check.innerHTML = "email hop le";
    check.style.color = "green";
  }
  form.email.value = "";
});

function checkEmail(str) {
  if (
    str.includes("@") &&
    (str.endsWith(".vn") || str.endsWith(".com")) &&
    /[a-z]/.test(str)
  ) {
    return 1;
  } else {
    return 0;
  }
}
