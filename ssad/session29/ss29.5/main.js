// Đăng ký người dùng mới.
//  Người dùng nhập tên, email và mật khẩu để đăng ký.
//  Yêu cầu email phải chứa @ và kết thúc bằng .com hoặc .vn, mật khẩu phải từ  6 ký tự trở lên (gồm ký tự đặc biệt, ký tự viết hoa).
//   Khi đăng ký tồn tại email hiển thị thông báo cho người dùng.
// Đăng nhập người dùng.
//   Người dùng nhập email và mật khẩu để đăng nhập.
//   Khi đăng nhập thành công hiển thị thông tin người dùng.
//   Đăng nhập không thành công hiển thị thông báo.
// Thoát.

let menu =
  "1. dang ky nguoi dung moi\n" + "2. dang nhap nguoi dung\n" + "3. thoat\n";

let listUser = [];

let t = 1;
while (t) {
  let choice = Number(window.prompt(menu, "nhap vao lua chon cua ban"));
  switch (choice) {
    case 1: {
      sign_up(listUser);
      break;
    }
    case 2: {
      login(listUser);
      break;
    }
    case 3: {
      t--;
      break;
    }
  }
}

/* kiem tra yeu cau cua email{
        email ton tai
        email phai chua @ va ket thuc bang .com hoac .vn
} */
function KiemTraacong(email) {
  return email.includes("@");
}
function kiemTraDuoi(email) {
  if (email.endsWith(".com") || email.endsWith(".vn")) {
    return true;
  } else return false;
}
function kiemtraTonTaiMail(email, list) {
  for (let i = 0; i < list.length; i++) {
    if (email === list[i].email) {
      return false;
    }
  }
  return true;
}
/*kiem tra mat khau{
        do dai > 6
        chua it nhat 1 ky tu dac biet
        chua ki tu viet hoa
}
*/
function kiemTradodai(pass) {
  if (pass.length > 6) {
    return true;
  } else return false;
}
function kiemTraKyTuVietHoa(pass) {
  if (/[A-Z]/.test(pass)) {
    return true;
  } else return false;
}
function kiemTraKyTuDacBiet(pass) {
  if (/[!@#$%^&<>{}*()<>?/:;"'`~+-=]/.test(pass)) {
    return true;
  } else return false;
}

function sign_up(list) {
  let user = {};
  user.tenDangNhap = prompt("nhap ten dang nhap");
  let check1 = 1;
  while (check1 === 1) {
    user.email = prompt("nhap vao email de dang ki");
    if (
      KiemTraacong(user.email) &&
      kiemTraDuoi(user.email) &&
      kiemtraTonTaiMail(user.email, list)
    ) {
      check1 = 0;
    } else {
      alert("email trung hoac khong ton tai");
      check1 = 1;
    }
  }
  let check2 = 1;
  while (check2 === 1) {
    user.password = prompt("nhap vao password");
    if (
      kiemTraKyTuDacBiet(user.password) &&
      kiemTraKyTuVietHoa(user.password) &&
      kiemTradodai(user.password)
    ) {
      check2 = 0;
    } else {
      check2 = 1;
      alert(
        "mat khau co do dai lon hon 6 ky tu\n" +
          "co it nhat mot ky tu in hoa\n" +
          "co it nhat mot ky tu dac biet"
      );
    }
  }
  alert("dang ki thanh cong");
  list.push(user);
  console.log(list);
}
function login(list) {
  let check = 0;
  let email = prompt("nhap vao email");
  let password = prompt("nhap vao password");
  for (let i = 0; i < list.length; i++) {
    if (list[i].email === email) {
      if (password === list[i].password) {
        alert(
          `dang nhap thanh cong vao tai khoan\nten nguoi dung: ${list[i].tenDangNhap}`
        );
      } else {
        alert("dang nhap khong thanh cong");
      }
      check = 1;
      break;
    }
  }
  if (check === 0) {
    alert("tai khoang chua duoc dang ky");
  }
}
