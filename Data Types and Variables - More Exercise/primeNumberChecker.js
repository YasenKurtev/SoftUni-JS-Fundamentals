function primeNumberChecker(num) {

    if (num <= 1) {
        console.log('false');
    }
    if (num === 2) {
        console.log('true');
    }

    for (var i = 2; i < num; i++)
        if (num % i === 0){
            console.log('false');
        }
        else {
            console.log('true');
        }

}

primeNumberChecker(81)