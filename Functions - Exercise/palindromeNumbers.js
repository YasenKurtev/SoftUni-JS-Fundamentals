function palindromeNumbers(arr) {

    function reverseNumCheck(num) {
        let numtoString = num.toString();
        if (numtoString === numtoString.split("").reverse().join("")) {
            console.log('true');
        } else {
            console.log('false');
        }
    }

    for (let i = 0; i < arr.length; i++) {
        reverseNumCheck(arr[i]);
    }
}

palindromeNumbers([123, 323, 421, 121])