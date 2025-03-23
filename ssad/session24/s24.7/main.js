let menu = [
  "1. Nhập chuỗi",
  "2. Hiển thị chuỗi",
  "3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện",
  "4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi",
  "5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi",
  "6. Chuyển đổi chuỗi ký tự thành dạng snake_case",
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
      str = str.split("");
      let check = 0;
      console.log(`cac phan tu trung lap la`);

      for (let i = 0; i < str.length; i++) {
        let count = 0;
        for (let j = 0; j < str.length; j++) {
          if (str[i] === str[j] && str[i] != " ") {
            if (i > j) {
              break;
            }
            count++;
          }
        }

        if (count > 1) {
          check = 1;
          console.log(`phan tu (${str[i]}) xuat hien: (${count}) lan`);
        }
      }
      if (check === 0) {
        console.log("khong co phan tu nao trung lap ca");
      }
      str = str.join("");
      break;
    }
    case 4: {
      let maxOfString = 0;
      let str1 = str.split(" ");
      for (let i = 0; i < str1.length; i++) {
        if (maxOfString < str1[i].length) {
          maxOfString = str1[i].length;
        }
      }
      console.log(`do dai phan tu dai nhat trong chuoi la: ${maxOfString}`);
      break;
    }
    case 5: {
      str = str.split("");
      let count = 0;
      let maxOfCount = 0;
      let character;
      for (let i = 0; i < str.length; i++) {
        count = 0;
        for (let j = 0; j < str.length; j++) {
          if (str[i] === str[j] && str[i] != " ") {
            count++;
          }
        }
        if (count > maxOfCount) {
          maxOfCount = count;
          character = str[i];
        }
      }
      console.log(
        `ky tu xuat hien nhieu lan nhat (${maxOfCount}) la: ${character}`
      );

      break;
    }
    case 6: {
      str = str.split(" ").join("_");
      console.log(`chuoi o dang snake_case: ${str}`);

      break;
    }
    case 7: {
      t--;
      break;
    }
  }
}
