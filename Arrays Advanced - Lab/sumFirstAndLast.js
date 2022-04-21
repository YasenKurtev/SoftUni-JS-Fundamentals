function sumFirstAndLast(arr){

    arr = arr.map(Number);
    let sum = arr[0] + arr.pop();
    console.log(sum);

}

sumFirstAndLast(['20', '30', '40'])
