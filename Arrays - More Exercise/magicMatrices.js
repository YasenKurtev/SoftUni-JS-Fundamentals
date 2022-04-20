function magicMatrices(arr){

    let rowsSum = 0;
    let previousSum = 0;
    let isEqualRows = false;
    
    for(let i = 0; i < arr.length; i++){
        let newArr = arr[i];
        if(previousSum = rowsSum){
            isEqualRows = true;
        }else{
            isEqualRows = false;
        }
        rowsSum = newArr[0] + newArr[1] + newArr[2];
        previousSum = rowsSum;

    }




    if((arr2[0] + arr2[1] + arr2[2] && arr3[0] + arr3[1] + arr3[2] &&
    arr1[0] + arr2[0] + arr3[0] && arr1[1] + arr2[1] + arr3[1] &&
    arr1[2] + arr2[2] + arr3[2]) === arr1[0] + arr1[1] + arr1[2]){
        console.log('true')
    }else{
        console.log('false');
    }
}

magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   
   
   )

