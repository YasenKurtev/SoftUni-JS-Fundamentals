function sumEvenNumbers(arr){

    let sum = 0;
    
    for(let i = 0; i < arr.length; i++){
        let number = Number(arr[i]);
        if(number % 2 == 0){
            sum += number;
        }
    }

    console.log(sum);

}

sumEvenNumbers(['1','2','3','4','5','6'])