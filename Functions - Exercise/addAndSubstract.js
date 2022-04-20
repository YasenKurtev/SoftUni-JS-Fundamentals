function addAndSubstract(num1, num2, num3){

    function sum(){
        return num1 + num2;
    }

    function substract(){
        return sum() - num3;
    }

    console.log(substract());

}

addAndSubstract(23,
    6,
    10
    )