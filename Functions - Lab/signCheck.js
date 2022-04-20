function signCheck(num1, num2, num3){

    let numArr = [num1, num2, num3];
    let negativeCount = 0;

    for(let i = 0; i <= numArr.length; i++){
        if(numArr[i] < 0){
            negativeCount++;
        }
    }
    if(negativeCount === 1 || negativeCount === 3){
        console.log('Negative');
    }else{
        console.log('Positive')
    }
}

signCheck( 5,
    12,
   -15
   )