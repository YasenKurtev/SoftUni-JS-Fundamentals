function triangleOfNumbers(num){

    let numAsString = '';
    let row = '';
    for(let i = 1; i <= num; i++){
        numAsString = i + ' ';
        row += numAsString.repeat(i);
        console.log(row);
        row = '';
    }

}

triangleOfNumbers(3)