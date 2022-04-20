function NxNmatrix(num) {

    let numsArr = [];

    for (let i = 1; i <= num; i++) {
        columns(num);
        console.log(numsArr.join(' '));
        numsArr = [];
    }

    function columns(col) {
        for (let i = 0; i <= col - 1; i++) {
            numsArr.push(col);
        }
    }
}

NxNmatrix(7)