function modernTimesOfHashTag(string) {

    let words = string.split(' ');
    let isCorrect = false;

    for (let word of words) {
        if (word.startsWith('#') && word.length > 1) {
            let asciiCode = word.charCodeAt(1);
            let isLetter =
                (asciiCode >= 65 && asciiCode <= 90) ||
                (asciiCode >= 97 && asciiCode <= 122);

            if (isLetter === true) {
                console.log(word.substring(1, word.length));
            }
        }
    }
}

modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign')