function equalSums(arr) {

    let sumLeft = 0;
    let sumRight = 0;
    let isEqual = true;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            sumRight += arr[j];
        }

        for (let k = i - 1; k >= 0; k--) {
            sumLeft += arr[k];
        }

        if (sumRight === sumLeft) {
            console.log(`${i}`);
            isEqual = true;
            break;
        } else {
            isEqual = false;
        }

        sumRight = 0;
        sumLeft = 0;
    }

    if (isEqual === false) {
        console.log(`no`);
    }
}

equalSums([1, 2])