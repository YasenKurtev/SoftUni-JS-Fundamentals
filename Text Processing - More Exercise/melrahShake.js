function melrahShake(arr) {

    let string = arr[0];
    let pattern = arr[1];
    let shakeCount = 0;

    while (string.includes(pattern)) {
        let length = pattern.length;
        let firstMatch = string.indexOf(pattern);
        let stringArr = Array.from(string);
        stringArr.splice(firstMatch, length);
        string = stringArr.join('');
        shakeCount++;
        if (string.includes(pattern)) {
            let lastMatch = string.lastIndexOf(pattern);
            stringArr.splice(lastMatch, length);
            string = stringArr.join('');
            shakeCount++;
        } else {
            console.log(`No shake.`);
            break;
        }
        if (shakeCount >= 2 && shakeCount % 2 === 0) {
            console.log(`Shaked it.`);
        } else {
            console.log(`No shake.`);
        }
        let patternArr = [];
        for (let i = 0; i < pattern.length; i++) {
            patternArr.push(pattern[i]);
        }
        let index = Math.floor(pattern.length / 2);
        patternArr.splice(index, 1);
        pattern = patternArr.join('');
    }

    if (pattern.length > 0) {
        console.log(`No shake.`);
    }
    console.log(string);
}

melrahShake(['astalavista baby',
'sta']
)