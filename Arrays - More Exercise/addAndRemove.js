function addAndRemove(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add') {
            newArr.push(i + 1);
        } else if (arr[i] === 'remove') {
            newArr.splice(-1);
        }
    }
    if(newArr.length === 0){
        console.log('Empty');
    }else{
    console.log(newArr.join(' '));
    }
}

addAndRemove(['remove', 'remove', 'remove'])