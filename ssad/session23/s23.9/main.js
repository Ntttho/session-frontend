let menu = [
  "1.Nhập số phần tử cần nhập và giá trị các phần tử",
  "2.In ra giá trị các phần tử đang quản lý",
  "3.In ra giá trị các phần tử chẵn và tính tổng",
  "4.In ra giá trị lớn nhất và nhỏ nhất trong mảng",
  "5.In ra các phần tử là số nguyên tố trong mảng và tính tổng",
  "6.Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó",
  "7.Thêm một phần từ vào vị trí chỉ định",
  "8.Thoát",
];
let Menu = menu.join("\n");
let t = 1;
let arr= [];
while (t) {
  let choice = Number(window.prompt(Menu, 8));
  switch (choice) {
    case 1: {
        let n = Number(prompt("nhap vao so phan tu"));
        for(var i = 0; i<n; i++){
            arr[i] = Number(prompt(`nhap vao phan tu thu ${i}`));
        }
      break;
    }
    case 2: {
        console.log(arr);
      break;
    }
    case 3: {
        let sum = 0;
        let arrs = [];
        count = 0;
        for(var i = 0; i<arr.length; i++){
            if(arr[i]%2===0){
                sum+=arr[i];
                arrs[count] = arr[i];
                count++;
            }
        }
        console.log(`phan tu la so chan ${arrs}`);
        console.log(`tong cac so chan la ${sum}`);

      break;
    }
    case 4: {
        let max = arr[0];
        let min = arr[0];
        for(var i = 1; i<arr.length; i++){
            if(max < arr[i]){
                max = arr[i];
            }
            if(min > arr[i]){
                min = arr[i];
            }
        }
        console.log(`max: ${max} va min: ${min}`);
        break;
    }
    case 5: {
        console.log("kiem tra phan tu nao la so nguyen to")
        for(var  i = 0; i<arr.length; i++){
            let check = 1;
            for(var j = 2; j<Math.sqrt(arr[i]); j++){
                if(arr[i] % j === 0){
                    check = 0;
                    break;
                }
            }
            if(!(check !== 0 || arr[i] < 2)){
                console.log(arr[i]);
            }

        }
      break;
    }
    case 6: {
        let a = Number(prompt("nhap vao so kiem tra tan suat"));
        let count = 0;
        for(var i = 0; i<arr.length; i++){
            if(a === arr[i]){
                count++;
            }
        }
        console.log(`so la xuat hien cua phan tu ${a} la: ${count}`);
        
      break;
    }
    case 7: {
        let position = Number(prompt(`nhap vi tri de them vao`));
        let add = Number(prompt("nhap vao phan tu ban muon them"));
        arr.splice(position,0,add);
      break;
    }
    case 8: {
      t = 0;
      break;
    }
  }
}
alert("thoat chuong trinh");
