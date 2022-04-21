function arrayManipulations(arr) {

    let numsArr = arr[0].split(' ');
    for (let i = 1; i < arr.length; i++) {
        let command = arr[i].split(' ');
        switch (command[0]) {
            case 'Add':
                numsArr.push(command[1]);
                break;
            case 'Remove':
                numsArr = numsArr.filter(el => el !== command[1]);
                break;
            case 'RemoveAt':
                numsArr.splice(command[1], 1);
                break;
            case 'Insert':
                numsArr.splice(command[2], 0, command[1]);
                break;
        }
    }
    console.log(numsArr.join(' '));
}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])