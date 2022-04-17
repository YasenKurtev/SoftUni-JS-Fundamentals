function addAndSubstract(arr) {

    let newArr = [];
    let sumArr = 0;
    let sumNewArr = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArr.push(arr[i] + i);
        } else {
            newArr.push(arr[i] - i);
        }
    }

    for(let num of arr){
        sumArr += num;
    }

    for(let num of newArr){
        sumNewArr += num;
    }

    console.log(newArr);
    console.log(sumArr);
    console.log(sumNewArr);

}

addAndSubstract([5, 15, 23, 56, 35])