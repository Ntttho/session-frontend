let menu = [
  "1. Nhập mảng",
  "2. Hiển thị mảng",
  "3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng",
  "4. Tính tổng các phần tử trong mảng",
  "5. Tìm số lần xuất hiện của một phần tử trong mảng",
  "6. Sắp xếp mảng tăng dần",
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
      let max = arr[0];
      let min = arr[0];
      for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
          max = arr[i];
        }
        if (min > arr[i]) {
          min = arr[i];
        }
      }
      console.log(`max: ${max} va min: ${min}`);
      break;
    }
    case 4: {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      console.log(`tong cac phan tu trong mang la ${sum}`);
      break;
    }
    case 5: {
      let input = Number(prompt("nhap vao phan tu kiemtra"));
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        if (input === arr[i]) {
          count += 1;
        }
      }
      console.log(`so lan xuat hien cua phan tu ${input} la: ${count}`);
      
      break;
    }
    case 6: {
      arr.sort(function (a, b) {
        return a - b;
      });
      // ham long ham su dung de sap xep mang
      break;
    }
    case 7: {
      t--;
      break;
    }
  }
}
