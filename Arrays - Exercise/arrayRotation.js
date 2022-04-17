function arrayRotation(arr, rotations){

    for(let i = 1; i <= rotations; i++){
        arr.push(arr[0]);
        arr.shift();
    }
    console.log(arr.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2)