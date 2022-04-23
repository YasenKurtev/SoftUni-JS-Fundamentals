function wordOccurraences(arr) {

    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let count = 1;
        if (map.has(word)) {
            let previousCount = map.get(word);
            let newCount = previousCount + 1;
            map.set(word, newCount)
        } else {
            map.set(word, count);
        }
    }

    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sorted) {
        console.log(`${key} -> ${value} times`);
    }

}

wordOccurraences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])