function sequences(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let arrOfNumbers = JSON.parse(arr[i]);
        arrOfNumbers.sort((a, b) => b - a);
        newArr.push(arrOfNumbers);
    }

    newArr.sort((a, b) => a.length - b.length);

    let stringArr = [];

    for (let arr of newArr) {
        stringArr.push(arr.toString());
    }

    let uniqe = new Set(stringArr);
    stringArr = [];

    for (let el of uniqe) {
        let element = el.split(',').map(Number);
        console.log(`[${element.join(', ')}]`);
    }

}

sequences(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]
)