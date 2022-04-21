function bombNumbers(seqArr, bombArr) {

    let bomb = bombArr[0];
    let power = bombArr[1];

    for (let i = 0; i < seqArr.length; i++) {
        if (seqArr[i] === bomb) {
            if (i === 0) {
                seqArr.splice(0, 1 + power);
            } else if (i === seqArr.length - 1) {
                seqArr.splice(i - power, seqArr.length - 1)
            } else {
                if (i - power < 0) {
                    seqArr.splice(0, 1 + power + power);
                } else {
                    seqArr.splice(i - power, 1 + power + power);
                }
            }
            i = 0;
        }
    }
    let sum = 0;
    for (let el of seqArr) {
        sum += el;
    }
    console.log(sum);
}

bombNumbers([1, 4, 1, 1, 1], [4, 3])