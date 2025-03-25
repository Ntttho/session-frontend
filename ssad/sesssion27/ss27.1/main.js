let menu =
  "1.cong hai so\n" +
  "2. tru hai so\n" +
  "3.nhan hai so\n" +
  "4.chia hai so\n" +
  "5.thoat";
let t = 1;
let a = 100; let b = 104;
while(t > 0){
    console.log(menu);
    let choice = +prompt("nhap vao lua chon cua ban");
    switch(choice){
        case 1:{
            console.log(`tong hai so la: `+sum(a,b));
            break;
        }
        case 2:{
            console.log(`hieu hai so la: ${signal(a,b)}`);
            
            break;
        }
        case 3:{
            console.log(accumulation(a,b));
            
            break;
        }
        case 4:{
            console.log(injury(a,b));
            
            break;
        }
        case 5:{
            t--;
            break;
        }

    }
}




//cac ham tinh tona
function sum(a,b){
    return a + b;
}
function signal(a, b){
    return a- b;
}
function accumulation(a, b){
    return a*b;
}
function injury ( a, b){
    return a/b;
}