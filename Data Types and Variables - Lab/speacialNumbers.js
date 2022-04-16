function specialNumbers(num){

    let sum = 0;

    for(let currentNum = 1; currentNum <= num; currentNum++){
        let currentNumAsString = String(currentNum);
        for(let i = 0; i < currentNumAsString.length; i++){
            sum += Number(currentNumAsString[i]);
        }
        if(sum == 5 || sum == 7 || sum == 11){
            console.log(`${currentNum} -> True`);
        }else{
            console.log(`${currentNum} -> False`);
        }
        sum = 0;
    }

}

specialNumbers(15)