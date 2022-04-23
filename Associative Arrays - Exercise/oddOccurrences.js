function oddOccurrences(string) {

    let words = string.split(' ');
    let wordsObj = {};

    for (let word of words) {
        word = word.toLocaleLowerCase();
        if (wordsObj.hasOwnProperty(word)) {
            wordsObj[word]++;
        } else {
            wordsObj[word] = 1;
        }
    }

    let sorted = Object.entries(wordsObj).sort((a, b) => b[1] - a[1]);

    let result = [];

    for (let [key, value] of sorted) {
        if (value % 2 !== 0) {
            result.push(key);
        }
    }
    console.log(result.join(' '));
}

oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')