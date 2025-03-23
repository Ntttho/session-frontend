let array = [];
let resultArray = [];
let count = 0;
for(var i =0; i<10; i++){
    array[i] = parseInt(prompt(`nhap vao phan tu ${i} cua mang`));
    if( array[i] > 10 && array[i] % 1 ===0){
        resultArray[count] = array[i];
        count++;
    }
}
console.log(resultArray);
