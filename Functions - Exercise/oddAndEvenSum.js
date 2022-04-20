function oddAndEvenSum(num) {

    let numAsString = num.toString();

    function oddSum(numAsString) {
        let oddSum = 0;
        for (let i = 0; i < numAsString.length; i++) {
            if (Number(numAsString[i]) % 2 !== 0) {
                oddSum += Number(numAsString[i]);
            }
        }
        return oddSum;
    }

    function evenSum(numAsString) {
        let evenSum = 0;
        for (let i = 0; i < numAsString.length; i++) {
            if (Number(numAsString[i]) % 2 === 0) {
                evenSum += Number(numAsString[i]);
            }
        }
        return evenSum;
    }
    console.log(`Odd sum = ${oddSum(numAsString)}, Even sum = ${evenSum(numAsString)}`);
}

oddAndEvenSum(1000435)