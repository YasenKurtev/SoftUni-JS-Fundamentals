function amazingNumbers(num){

    let numAsString = String(num);
    let sum = 0;

    for(let i = 0; i < numAsString.length; i++){
        sum += Number(numAsString[i]);
    }
    
    let sumAsString = String(sum);

    speacial = false;

    for(let i = 0; i < sumAsString.length; i++){
        if(sumAsString[i] == 9){
            speacial = true;
        }
    }
    
    if(speacial == true){
        console.log(`${num} Amazing? True`);
    }else{
        console.log(`${num} Amazing? False`);
    }

}

amazingNumbers(1233)