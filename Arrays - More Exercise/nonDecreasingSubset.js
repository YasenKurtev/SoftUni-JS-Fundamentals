function nonDecreasingSubset(arr){

    let biggestNumber = arr[0];
    let newArr = [];

    for(let i = 0; i < arr.length; i++){
        if(biggestNumber <= arr[i]){
            newArr.push(arr[i]);
            biggestNumber = arr[i];
        }
    }
    console.log(newArr.join(' '));
}

nonDecreasingSubset([ 20, 3, 2, 15, 6, 1])