function revealWords(words, string) {

    let wordsArr = words.split(', ');
    let stringArr = string.split(' ');

    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i].startsWith('*')) {
            for (let word of wordsArr) {
                if (word.length === stringArr[i].length) {
                    stringArr[i] = word;
                }
            }
            i = -1;
        }
    }
    console.log(stringArr.join(' '));
}

revealWords('great',
'softuni is ***** place for learning new programming languages'
)