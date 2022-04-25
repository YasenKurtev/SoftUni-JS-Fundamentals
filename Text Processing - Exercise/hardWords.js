function hardWords(arr) {

    let text = arr.shift().split(' ');
    let words = arr.shift();

    for (let word of words) {
        let searched = '_'.repeat(word.length);
        for (let word1 of text) {
            if (word1.endsWith('.') || word1.endsWith(',')
                || word1.endsWith('!') || word1.endsWith('?')) {
                let endChar = word1.substring(word1.length - 1);
                let rest = word1.substring(0, word1.length - 1);
                if (rest === searched) {
                    text[text.indexOf(word1)] = word + endChar;
                }
            } else {
                if (word1 === searched) {
                    text[text.indexOf(word1)] = word;
                }
            }
        }
    }
    console.log(text.join(' '));
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)