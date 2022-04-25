function stringSubstring(word, text) {

    let textArr = text.split(' ');
    let isFound = false;

    for (let word1 of textArr) {
        if (word1.toLowerCase() === word.toLowerCase()) {
            console.log(word);
            isFound = true;
            break;
        }
    }
    if (isFound === false) {
        console.log(`${word} not found!`);
    }
}

stringSubstring('python',
    'JavaScript is the best programming language'
)