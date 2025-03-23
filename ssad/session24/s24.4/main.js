let menu = [
  "1. Nhập mảng 2 chiều",
  "2. Hiển thị mảng 2 chiều",
  "3. Tính tổng các phần tử trong mảng",
  "4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó",
  "5. Tính trung bình cộng các phần tử của một hàng cụ thể",
  "6. Đảo ngược các hàng trong mảng",
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
      let col = Number(prompt("nhap vao so cot cua mang"));
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
        let max = -10/0;
        let x;
        let y;
        for(let i = 0 ; i<arr.length; i++){
            for(let j =0; j< arr[i].length ; j++){
                if(max < arr[i][j]){
                    max = arr[i][j];
                    x=i;
                    y=j;
                }
            }
        }
        console.log(`gia tri lon nhat la ${max} tai vi tri ${x}-${y}`)
        break;
    }
    case 5: {
        let row = Number(prompt(`nhap vao tu 0-${arr.length} de tinh tbc`));
        let sum = 0;
        for(let i = 0; i<arr[row].length; i++){
            sum += arr[row][i];
    
        }
        sum = sum/arr[row].length;
        console.log(`trung binh cong cua hang ${row} trong mang la : ${sum}`);
      break;
    }
    case 6: {
        for(let i = 0; i<arr.length; i++){
            arr[i].reverse();
            console.log(arr[i]);
        }
      break;
    }
    case 7: {
      t--;
      break;
    }
  }
}
