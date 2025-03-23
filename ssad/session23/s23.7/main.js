let arr = [];
let t = Number(prompt("nhap vao so luong phan tu cua mang"));
if (t < -1) {
  confirm("so luong phan tu khong duoc nho hon khong");
} else if (t < 2) {
  confirm("khong co phan tu lon thu 2");
} else {
    let max1 = -10/0;
  for (var i = 0; i < t; i++) {
    arr[i] = Number(prompt(`nhap vao phan tu thu ${i} cua mang`));
    if(max1 < arr[i]){
        max1 = arr[i];
    }
  }
  let max2 = -10 / 0; // gia tri am vo cung
  for(var i = 0 ; i<t; i++){
    if(max2 < arr[i] && arr[i] < max1){
        max2 = arr[i];
    }
  }
  console.log(max2);
}
