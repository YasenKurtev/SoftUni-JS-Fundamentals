function wordsTracker(arr) {

    let searchedWords = arr.shift().split(' ');
    let wordsObj = {};

    for (let word of searchedWords) {
        wordsObj[word] = 0;
    }
    for (let i = 0; i < arr.length; i++) {
        if (wordsObj.hasOwnProperty(arr[i])) {
            wordsObj[arr[i]]++;
        }
    }

    let sorted = Object.entries(wordsObj).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sorted) {
        console.log(`${key} - ${value}`);
    }
}

wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    )