function districtArray(arr) {

    //    let unique = arr.filter((e, i, a) => a.indexOf(e) === i);
    //    console.log(unique.join(' '));

    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j = i + 1;
            }
        }
    }
    console.log(arr.join(' '));
}

districtArray([7, 8, 9, 7, 2, 3, 4, 1, 2])