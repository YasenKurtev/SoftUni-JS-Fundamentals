function arrayManipulator(arr, strings) {

    for (let i = 0; i < strings.length; i++) {
        let command = strings[i].split(' ');
        let operation = command[0];
        switch (operation) {
            case 'add':
                arr.splice(command[1], 0, Number(command[2]));
                break;
            case 'addMany':
                let addArr = [];
                for (let j = 2; j < command.length; j++) {
                    addArr.push(Number(command[j]));
                }
                arr.splice(command[1], 0, ...addArr);
                break;
            case 'contains':
                let isFound = false;
                let num = 0;
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k] === Number(command[1])) {
                        isFound = true;
                        num = k;
                        break;
                    }
                }
                if (isFound === true) {
                    console.log(num);
                } else {
                    console.log(-1);
                }
                break;
            case 'remove':
                arr.splice(command[1], 1);
                break;
            case 'shift':
                for (let h = 0; h < command[1]; h++) {
                    let firstNumber = arr.shift();
                    arr.push(firstNumber);
                }
                break;
            case 'sumPairs':
                let sumArr = [];
                while (arr.length !== 0) {
                    if (arr.length === 1) {
                        arr.push(0);
                    }
                    let pairs = arr.splice(0, 2);
                    let sum = pairs[0] + pairs[1];
                    sumArr.push(sum);
                }
                arr = sumArr.slice();
                break;
            case 'print':
                console.log(`[ ${arr.join(', ')} ]`);
                break;
        }
    }
}

arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']


)

/*for (let com of strings) {
        let command = com.split(' ');
        let operation = command[0];
        if (operation === 'add') {
            let index = Number(command[1]);
            let element = Number(command[2]);
            arr.splice(index, 0, element);
        } else if (operation === 'addMany') {
            let index = Number(command[1]);
            command.splice(0, 2);
            let addArr = command.map(Number);
            arr.splice(index, 0, ...addArr);
        } else if (operation === 'contains') {
            let result = arr.indexOf(Number(command[1]));
            console.log(result);
        } else if (operation === 'remove') {
            let index = Number(command[1]);
            arr.splice(index, 1);
        } else if (operation === 'shift') {
            let position = Number(command[1]);
            for (let h = 0; h < position; h++) {
                let firstNumber = arr.shift();
                arr.push(firstNumber);
            }
        } else if (operation === 'sumPairs') {
            let sumArr = [];
            if (arr.length % 2 !== 0) {
                arr.push(0);
            }
            for (let i = 0; i < arr.length - 1; i += 2) {
                let sum = arr[i] + arr[i + 1];
                sumArr.push(sum);
            }
            arr = sumArr;
        } else if (operation === 'print') {
            console.log(`[ ${arr.join(', ')} ]`);
        }
    }*/