function searchForANumber(arr1, arr2){

    let elementsToTake = arr2[0];
    let elementsToDelete = arr2[1];
    let searchedNumber = arr2[2];
    let count = 0;

    let newArr = arr1.splice(0, elementsToTake);
    newArr.splice(0, elementsToDelete);

    for (let el of newArr){
        if(el === searchedNumber){
            count++;
        }
    }
    console.log(`Number ${searchedNumber} occurs ${count} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3])