function lastKNumbersSequence(n, k) {

    let seqArr = [1];
    for (let i = 1; i < n; i++) {
        if (seqArr.length === 1) {
            seqArr.push(seqArr[0]);
        } else if (seqArr.length === 2) {
            seqArr.push(seqArr[0] + seqArr[1]);
        } else {
            let slicedArr = seqArr.slice(i-k, i);
            let current = 0;
            for(let el of slicedArr){
                current += el;
            }
            seqArr.push(current);
        }
    }
    console.log(seqArr.join(' '));
}

lastKNumbersSequence(6, 3)