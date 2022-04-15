function printAndSum(num1, num2){

    let sum = 0;
    let numAsString = '';
    let row = '';
    for(let i = num1; i <= num2; i++){
        numAsString = i + ' ';
        row += numAsString;
        sum += i;
    }
    console.log(row)
    console.log(`Sum: ${sum}`)
}

printAndSum(5, 10)