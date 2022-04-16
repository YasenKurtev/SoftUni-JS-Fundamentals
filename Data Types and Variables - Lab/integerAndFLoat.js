function integerAndFLoat(n1, n2, n3) {

    let sum = n1 + n2 + n3;
    let sumAsString = String(sum);
    let isFloat = false;
    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i] == '.') {
            console.log(`${sum} - Float`);
            isFloat = true;
        }
    }
    if (!isFloat) {
        console.log(`${sum} - Integer`);
    }
}

integerAndFLoat(9, 100, 1.1)