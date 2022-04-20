function factorialDivision(num1, num2) {

    function factorialCalculator(calc) {
        for (let i = calc - 1; i >= 1; i--) {
            calc = calc * i;
        }
        return calc;
    }
    console.log((factorialCalculator(num1) / factorialCalculator(num2)).toFixed(2));
}

factorialDivision(6, 2)