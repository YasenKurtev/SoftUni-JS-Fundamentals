function mathPower(num, power){

    let startNum = num;

    for(let i = 1; i < power; i++){
        num = startNum * num;
    }
    
    return num;
}

mathPower(3, 4)