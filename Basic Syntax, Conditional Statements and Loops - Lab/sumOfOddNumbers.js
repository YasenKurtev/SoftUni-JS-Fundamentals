function sumOfOddNumbers(num){

    let currentNum = 1;
    let sumNum = 0;
    for(let i = num; i >= 1; i--){
        sumNum += currentNum;
        console.log(currentNum);
        currentNum += 2;
    }
    console.log(`Sum: ${sumNum}`);
}

sumOfOddNumbers(5)