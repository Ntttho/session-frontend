let menu = [
  "1. Nhập chuỗi",
  "2. Hiển thị chuỗi",
  "3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi",
  "4. Đảo ngược chuỗi ký tự",
  "5. Đếm số lượng từ trong chuỗi ký tự",
  "6. Tìm kiếm và thay thế các ký tự",
  "7. Thoát chương trình",
];
let Menu = menu.join("\n");
let t = 1;
let str;
while (t) {
  let choice = Number(window.prompt(Menu, "nhap lua chon cua ban tu 1-7"));
  switch (choice) {
    case 1: {
      str = prompt("nhap chuoi");
      break;
    }
    case 2: {
      console.log(str);
      break;
    }
    case 3: {
      str = str.trim();
      console.log(`chuoi duoc chuan chuan hoa khoang trang ${str}`);
      break;
    }
    case 4: {
      str = str.split("").reverse().join("");
      console.log(`chuoi sau khi dao nguoc: ${str}`);
      break;
    }
    case 5: {
      str=str.split(" ");
      console.log(`so luong tu co trong chuoi ${str.length}`);
      str=str.join(" ");
      
      break;
    }
    case 6: {
      let search = prompt('nhap ky tu tim kiem');
      let change = prompt('nhap ky tu thay the');
      str = str.split('');
      for(let i = 0; i < str.length; i++){
        if(str[i] === search){
          str[i] = change;
        }
      }
      str = str.join('');
      console.log(`thay the thanh cong`);
      
      break;
    }
    case 7: {
      t--;
      break;
    }
  }
}
