function pointsValidation(arr) {

    let x1 = arr[0];
    let x2 = arr[2];
    let y1 = arr[1];
    let y2 = arr[3];

    let distance = ((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) / 2;

    if(distance.isInteger()){
        console.log(`{${x1, y1}} to {${x2, y2}} is valid`);
    }

}

pointsValidation([3, 0, 0, 4])