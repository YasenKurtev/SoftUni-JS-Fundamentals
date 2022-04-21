function processOddNumbers(arr) {

    let oddNums = arr.filter((num, x) => x % 2 !== 0).map(x => x * 2);

    console.log(oddNums.reverse().join(' '));
}

processOddNumbers([3, 0, 10, 4, 7, 3])