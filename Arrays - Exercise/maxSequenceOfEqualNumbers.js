function maxSequenceOfEqualNumbers(arr) {

    let newArr = [];
    let tempArr = [];
    let previousElement = 0;

    for (let i = 0; i < arr.length; i++) {
        if (previousElement === arr[i] || newArr.length === 0) {
            newArr.push(arr[i]);
            if (newArr.length > tempArr.length) {
                tempArr = newArr;
            }
        } else {
            newArr = [];
            newArr.push(arr[i]);
        }

        if (newArr.length > tempArr.length) {
            tempArr = newArr;
        }
        previousElement = arr[i];
    }
    console.log(tempArr.join(' '));
}

maxSequenceOfEqualNumbers([0, 1, 1, 5, 2, 2, 6, 3, 3])