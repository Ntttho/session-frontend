let f1 = 0;
let f2 = 1;
let t = Number(prompt("nhap vao so so fibonaci phai in ra"));
while(t){
    console.log(f1);
    temp = f2;
    f2 = f2 + f1; 
    f1 = temp;
    t--;
}