/*
id: so nguyen 
name: ten cua nguoi lien he
email: email nguowi lien he
phone: sdt cua nguoi lien he
*/
let menu =
  "1.Thêm đối tượng Contact vào danh sách liên hệ.\n" +
  "2.Hiển thị danh sách danh bạ.\n" +
  "3.Tìm kiếm thông tin Contact theo số điện thoại.\n" +
  "4.Cập nhật thông tin Contact(name, email, phone) theo id.\n" +
  "5.Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.\n" +
  "6.Thoát.";

let listContact = [];
while (true) {
  let choice = Number(window.prompt(menu, "nhap lua chon cua ban"));
  switch (choice) {
    case 1: {
      addNewcontact(listContact);
      break;
    }
    case 2: {
      if (listContact.length > 0) {
        showlist(listContact);
      } else {
        alert("chuu co lien he nao trong danh sach");
      }
      break;
    }
    case 3: {
      if (listContact.length > 0) {
        findcontactbyphonenumber(listContact);
      } else {
        alert("chua co lien he nao trong danh sach");
      }
      break;
    }
    case 4: {
      if (listContact.length > 0) {
        update(listContact);
      } else {
        alert("chua co lien he nao trong danh sach");
      }
      break;
    }
    case 5: {
      if (listContact.length > 0) {
        deletecontact(listContact);
      } else {
        alert("chua co lien he nao trong danh sach");
      }
      break;
    }
    case 6: {
      break;
    }
  }
  if (choice === 6) {
    break;
  }
}
// ================= cac ham lam viec voi contact

// them nguoi lien he moi
function addNewcontact(list) {
  let contact = {};
  contact.id = Math.round(Math.random() * 1000000000); // id duoc tao ngau nhien voi so luong kho trung nhau
    contact.name = prompt("nhap ten cua nguoi lien he");
    contact.email = prompt("nhap vao email cua nguoi lien he");
    contact.phone = prompt("nhap so dien thoai cua nguoi lien he");
  // contact.name = "ho va ten";
  // contact.email = "email";
  // contact.phone = "0812719014";
  list.push(contact);
}

// hien thi danh sach
function showlist(list) {
  console.log("show danh sach sinh vien");
  for (let member in list) {
    console.log(list[member]);
  }
}

// tim kiem thong tin theo so dien thoai
function findcontactbyphonenumber(list) {
  let input = prompt("nhap vao phonenumber de tim kiem");
  console.log("tim contact thong qua phone");

  for (let member in list) {
    if (list[member].phone === input) {
      console.log(list[member]);
      return;
    }
  }
  console.log("khong tim thay");
  
  alert("khong tim thay thong tin tren");
}
// cap nhap thong tin thong qua id

function update(list) {
  let input = Number(prompt("nhap vao id de sua doi thong tin"));
  for (let member of list) {
    if (member.id === input) {
      alert("cap nhap nha ");
      member.name = prompt("nhap vao ten");
      member.email = prompt("nhap vao email");
      member.phone = prompt("nhap vao so dien thoai");
      alert("cap nhap thanh cong");
      return;
    }
  }
  alert("khong tim thay id nay");
}

// coa doi tuong contact
function deletecontact(list) {
  let input = Number(prompt("nhap vao id ban muon xoa"));
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === input) {
      list.splice(i, 1);
      alert("xoa thanh cong");
      return;
    }
  }
  alert("khong tim thay id nay");
}
