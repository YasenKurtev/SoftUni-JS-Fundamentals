function firstAndLastKnumbers(arr){

    let k = arr.shift();
    let first = arr.slice(0, k);
    let last = arr.slice(arr.length-k, arr.length);
    console.log(first.join(' '));
    console.log(last.join(' '));

}

firstAndLastKnumbers([2, 
    7, 8, 9]
    )