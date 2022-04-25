function pascalCaseSplitter(string) {

    let wordsArr = [];
    let currentWord = '';

    for (let i = 0; i < string.length; i++) {
        let currentChar = string[i];
        if (currentChar === currentChar.toUpperCase()) {
            wordsArr.push(currentWord);
            currentWord = '';
            currentWord += currentChar;
        } else {
            currentWord += currentChar;
        }
    }
    wordsArr.push(currentWord);
    wordsArr.shift();
    console.log(wordsArr.join(', '));
}

pascalCaseSplitter('ThisIsSoAnnoyingToDo')