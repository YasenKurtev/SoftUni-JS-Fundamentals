function perfectNumber(num) {

    function sumDivisors(div) {
        let sumDivisors = 0;
        for (let i = 1; i <= num - 1; i++) {
            if (num % i === 0) {
                sumDivisors += i;
            }
        }
        return sumDivisors;
    }

    if (sumDivisors(num) === num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(28)