function replaceRepeatingChars(string) {

    let result = '';
    let previousChar = 0;

    for (let i = 0; i < string.length; i++) {
        let currentChar = string[i];
        if (currentChar !== previousChar) {
            previousChar = currentChar;
            result += currentChar;
        }
    }
    console.log(result);
}

replaceRepeatingChars('qqqwerqwecccwd')