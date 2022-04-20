function passwordValidator(pass) {

    function isLengthEnough(stringPassword) {
        if (stringPassword.length < 6 || stringPassword.length > 10) {
            return false;
        } else {
            return true;
        }
    }

    function areOnlyLettersAndDigits(stringPassword) {
        let isCorrect = true;
        for (let i = 0; i <= stringPassword.length - 1; i++) {
            let charAsCode = stringPassword[i].charCodeAt();
            if (charAsCode >= 48 && charAsCode <= 57 ||
                charAsCode >= 65 && charAsCode <= 90 ||
                charAsCode >= 97 && charAsCode <= 122) {
                isCorrect = true;
            } else {
                isCorrect = false;
                break;
            }
        }
        return isCorrect === true ? true : false;
    }

    function digitsCount(stringPassword) {
        let digitsCount = 0;
        for (let ch of stringPassword) {
            if (ch >= '0' && ch <= '9') {
                digitsCount++;
            }
        }
        return digitsCount >= 2 ? true : false;
    }

    if (isLengthEnough(pass) && areOnlyLettersAndDigits(pass) && digitsCount(pass)) {
        console.log('Password is valid');
    }
    if (!isLengthEnough(pass)) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (!areOnlyLettersAndDigits(pass)) {
        console.log('Password must consist only of letters and digits');
    }
    if (!digitsCount(pass)) {
        console.log('Password must have at least 2 digits');
    }
}

passwordValidator('Pa$s$s')