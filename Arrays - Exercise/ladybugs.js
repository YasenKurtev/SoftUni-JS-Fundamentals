function ladybugs(arr) {

    let field = [];
    for (let i = 1; i <= Number(arr[0]); i++) {
        field.push(0);
    }
    let initialPositions = arr[1].split(' ');
    for (let j = 0; j <= initialPositions.length - 1; j++) {
        field[initialPositions[j]] = 1;
    }
    for (let k = 2; k <= arr.length - 1; k++) {
        let command = arr[k].split(' ');
        let bugIndex = Number(command[0]);
        let direction = command[1];
        let flyLength = Number(command[2]);
        let landPoint = 0;
        if (flyLength < 0) {
            direction = direction === 'right' ? 'left' : 'right';
            flyLength = Math.abs(flyLength);
        }
        switch (direction) {
            case "right":
                if (field[bugIndex] === 1 && bugIndex >= 0 && bugIndex <= field.length - 1) {
                    while (flyLength > 0) {
                        landPoint = bugIndex + flyLength;
                        if (landPoint > field.length - 1) {
                            bugIndex = Number(command[0]);
                            field[bugIndex] = 0;
                            break;
                        }
                        if (field[landPoint] === 0) {
                            field[landPoint] = 1;
                            bugIndex = Number(command[0]);
                            field[bugIndex] = 0;
                            flyLength = 0;
                        } else if (field[landPoint] === 1) {
                            bugIndex = landPoint;
                            landPoint = bugIndex + flyLength;
                        }
                    }
                }
                break;
            case "left":
                if (field[bugIndex] === 1 && bugIndex >= 0 && bugIndex <= field.length - 1) {
                    while (flyLength > 0) {
                        landPoint = bugIndex - flyLength;
                        if (landPoint < 0) {
                            bugIndex = Number(command[0]);
                            field[bugIndex] = 0;
                            break;
                        }
                        if (field[landPoint] === 0) {
                            field[landPoint] = 1;
                            bugIndex = Number(command[0]);
                            field[bugIndex] = 0;
                            flyLength = 0;
                        } else if (field[landPoint] === 1) {
                            bugIndex = landPoint;
                            landPoint = bugIndex - flyLength;
                        }
                    }
                }
                break;
        }
    }
    console.log(field.join(' '));
}

ladybugs([5, '3',
    '3 left 2',
    '1 left -2']

)