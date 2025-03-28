/* 
id name position salary
thây đổi tư duy đi
thay vì sử dụng duyệt ob để xóa 1 element thì ta có thể
gán ob đó cho chính nó chứa những element khác id hay name hay information của element muốn xóa
*/

let staff = [];

const menu =
  "1.Thêm nhân viên mới.\n" +
  "2.Xóa nhân viên theo id.\n" +
  "3.Cập nhật mức lương của nhân viên theo id\n" +
  "4.Tìm kiếm nhân viên theo tên.\n";

while (true) {
  let choice = Number(prompt(menu, "nhap vao chuc nang ban muon"));
  switch (choice) {
    case 1: {
      add(staff);
      alert("nhap vao thanh cong");
      break;
    }
    case 2: {
      if (staff.length > 0) {
        deleteStaff(staff);
      } else {
        alert("chua co nhan vien nao trong danh sach");
      }
      break;
    }
    case 3: {
      if (staff.length > 0) {
        fixSalary(staff);
      } else {
        alert("chua co nhan vien nao trong danh sach");
      }
      break;
    }
    case 4: {
      if (staff.length > 0) {
        findStaff(staff);
      } else {
        alert("khong co nhan vien nao trong danh sach");
      }
      break;
    }
    case 5: {
      for (let ob of staff) {
        console.log(ob);
      }
      break;
    }
  }

  if (choice > 5 || choice < 1) {
    break;
  }
}

// them moi nhan vien
function add(arr) {
  let ob = {};
  ob.id = arr.length;
  ob.name = prompt("nhap vao ten cua nhan vien them vao");
  ob.position = prompt("nhap vao chuc vu cua nhan vien");
  ob.salary = Number(window.prompt("nhap luong nhan vien do", 200000000));
  arr.push(ob);
}
// xoa nhan vien theo id
function deleteStaff(arr) {
  let input = Number(prompt("nhap vao id can xoa"));
  for (let staff in arr) {
    if (arr[staff].id === input) {
      check = 1;
      arr.splice(staff, 1);
      alert("xoa nhan vien thanh cong");
      return;
    }
  }
  console.log("khong tim thay id nhan vien trong danh sach");
}
//cap nhap muc luong thong qua id
function fixSalary(arr) {
  let input = Number(prompt("nhap vao id can xoa"));
  let check = 0;
  for (let staff in arr) {
    if (arr[staff].id === input) {
      check = 1;
      arr[staff].salary = Number(
        window.prompt("nhap vao muc luong ban muon chinh sua", 20000000)
      );
      alert("sua muc luong thanh cong");
      return; // thoat
    }
  }
  console.log("khong tim thay id nhan vien trong danh sach");
}
// tim nhan vien theo ten
function findStaff(arr) {
  let check = 0;
  let input = prompt("nhap vao ten nhan vien de tim kiem");
  for (let staff in arr) {
    if (arr[staff].name === input) {
      console.log(arr[staff]);
      check = 1;
    }
  }
  if (check === 0) {
    console.log("khong tim thay nhan vien trong danh sach");
  }
}
