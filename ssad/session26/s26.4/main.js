function condition(member){
    if(member<2 || isNaN(member)){
        return 0;
    }
    for(let i = 0; i<=Math.sqrt(member); i++){
        if(member % 2 ===0){
            return 0;
        }
    }
    return member;
}
function checkPrime(arr){
    if(!Array.isArray(arr)){
        return "du lieu khong hop le";
    }
    if(arr.length == 0){
        return "mang khong chua phan tu nao";
    }
    return arr.filter(member => condition(member)!==0);
}

console.log(checkPrime([1,2,3,4,5,6,7,8,9,10]));
console.log(checkPrime([]));
console.log(checkPrime("danh nhauj khong"));
