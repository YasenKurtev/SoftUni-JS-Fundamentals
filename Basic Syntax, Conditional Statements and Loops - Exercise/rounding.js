function rounding(num1, num2){

    if(num2 > 15){
        num2 = 15;
    }
    let num = num1.toFixed(num2)
    console.log(parseFloat(num));

}

rounding(10.5,3)