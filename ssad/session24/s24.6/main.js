let menu = [
  "1. Nhập chuỗi",
  "2. Hiển thị chuỗi",
  "3. Tính độ dài của chuỗi",
  "4. Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi",
  "5. Kiểm tra chuỗi có phải là chuỗi đối xứng không",
  "6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ",
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
      str = str.trim();
      break;
    }
    case 2: {
      console.log(str);
      break;
    }
    case 3: {
      console.log(`do dai cua chuoi la: ${str.length}`);
      break;
    }
    case 4: {
      str.split("");
      let count = 0;
      let enterCharater = prompt("nhap vao ky tu ban muon kiem tra");
      for (let character of str) {
        if (enterCharater === character) {
          count++;
        }
      }
      console.log(`so lan xuat hien cua ${enterCharater} la : ${count}`);
      break;
    }
    case 5: {
      let str2 = str;
      str2.split("").reverse().join("");
      if (str === str2) {
        console.log(`chuoi nay la chuoi doi xung`);
      } else {
        console.log(`la chuoi khong doi xung`);
      }
      break;
    }
    case 6: {
      let arr =str.toLowerCase().split(' ');
      for(let i = 0; i<arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1); 
        // vd hello --> H + ello;
      }
      str = arr.join(' ');
      console.log(str);
      break;
    }
    case 7: {
      t--;
      break;
    }
  }
}
