function rotateArray(arr){

    let rotations = arr[arr.length-1];
    arr.splice(-1);

    for(let i = rotations; i > 0; i--){
        arr.unshift(arr[arr.length-1]);
        arr.splice(-1);
    }
    console.log(arr.join(' '));
}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])