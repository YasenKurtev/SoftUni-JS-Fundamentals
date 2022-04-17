function maxNumber(arr) {

    let newArr = [];
    let isGreater = false;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                isGreater = true;
            } else {
                isGreater = false;
                break;
            }
        }
        if (isGreater || i === arr.length - 1) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join(' '));
}

maxNumber([1, 4, 3, 2])