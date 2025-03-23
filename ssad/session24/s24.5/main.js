let menu = [
  "1. Nhập mảng 2 chiều",
  "2. Hiển thị mảng 2 chiều",
  "3. Tính tổng các phần tử trong mảng",
  "4. Tính tổng đường chéo chính",
  "5. Tính tổng đường chéo phụ",
  "6. Tính trung bình cộng các phần tử trong một hàng",
  "7. Thoát chương trình",
];
let Menu = menu.join("\n");
let t = 1;

let arr = [];
while (t) {
  let choice = Number(window.prompt(Menu, 7));
  switch (choice) {
    case 1: {
      let row = Number(prompt("nhap vao so hang cua mang"));
      let col = row;
      arr = new Array(row);
      for (let i = 0; i < row; i++) {
        arr[i] = new Array(col);
        for (let j = 0; j < col; j++) {
          arr[i][j] = Number(prompt(`nhap vao phan tu [${i}][${j}] cua mang`));
        }
      }
      break;
    }
    case 2: {
      for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
      }
      break;
    }
    case 3: {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          sum += arr[i][j];
        }
      }
      console.log(`tong cac phan tu trong mang la: ${sum}`);
      break;
    }
    case 4: {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i][i];
      }
      console.log(`tong gia tri cac phan tu duong cheo chinh la: ${sum}`);

      break;
    }
    case 5: {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[arr.length - i - 1][i];
      }
      console.log(`tong cac gia tri duong cheo phu la: ${sum}`);
      break;
    }
    case 6: {
      let row = Number(prompt(`nhap vao tu 0-${arr.length} de tinh tbc`));
      let sum = 0;
      for (let i = 0; i < arr[row].length; i++) {
        sum += arr[row][i];
      }
      let tbc = sum / arr.length;
      console.log(`trung binh cong cua hang ${row} trong mang la : ${tbc}`);
      break;
    }
    case 7: {
      t--;
      break;
    }
  }
}
