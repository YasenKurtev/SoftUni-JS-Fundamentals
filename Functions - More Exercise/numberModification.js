function numberModification(num) {

    let numToString = num.toString();
    let digitsSum = 0;
    let isCorrect = false;

    function check() {
        for (let i = 0; i <= numToString.length - 1; i++) {
            digitsSum += Number(numToString[i]);
        }
        return digitsSum;
    }

    while (isCorrect === false) {
        check(num);
        if (digitsSum / numToString.length >= 5) {
            console.log(Number(numToString));
            break;
        } else {
            numToString += 9;
            digitsSum = 0;
        }
    }
}

numberModification(5835)