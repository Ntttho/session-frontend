let menu = [
  "1. Nhập mảng số nguyên",
  "2. Hiển thị mảng",
  "3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó",
  "4. Tính tổng và trung bình cộng của các số dương trong mảng",
  "5. Đảo ngược mảng",
  "6. Kiểm tra mảng có đối xứng không",
  "7. Thoát chương trình",
];
let Menu = menu.join("\n");
let t = 1;
let arr = [];
while (t) {
  let choice = Number(window.prompt(Menu, 7));
  switch (choice) {
    case 1: {
      let n = Number(prompt("nhap so luong phan tu cho mang"));
      arr = new Array(n);
      for (let i = 0; i < n; i++) {
        arr[i] = parseInt(prompt(`nhap phan tu thu ${i}`));
      }
      break;
    }
    case 2: {
      console.log(arr);
      break;
    }
    case 3: {
      let arrc = [];
      let arrl = [];
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
          arrc.push(arr[i]);
        } else {
          arrl.push(arr[i]);
        }
      }
      console.log(`cac so chan: ${arrc} va cac so le: ${arrl} `);
      break;
    }
    case 4: {
      let tbc = 0;
      for (let i = 0; i < arr.length; i++) {
        tbc += arr[i];
      }
      tbc = tbc / arr.length;
      console.log(`trung binh cong cac gia tri cua mang la: ${tbc}`);
      break;
    }
    case 5: {
      let position = Number(prompt("nhap vi tri de xoa phan tu"));
      arr.splice(position, 1);
      break;
    }
    case 6: {
      let max1 = arr[0];
      let max2 = -10 / 0; // gia tri am vo cung khong con gia tri nao nho hon no nua
      for (let i = 1; i < arr.length; i++) {
        if (max1 < arr[i]) {
          max1 = arr[i];
        }
      }
      for (let i = 0; i < arr.length; i++) {
        if (max2 < arr[i] || arr[i] < max1) {
          max2 = arr[i];
        }
      }
      console.log(`phan tu lon thu 2 trong mang la: ${max2}`);
      break;
    }
    case 7: {
      t--;
      break;
    }
  }
}
