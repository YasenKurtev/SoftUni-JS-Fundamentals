function piccolo(arr) {

    let parking = new Set();

    for (let line of arr) {
        let [command, number] = line.split(', ');

        if (command === "IN") {
            parking.add(number);
        } else {
            parking.delete(number);
        }
    }

    if (parking.size === 0) {
        console.log("Parking Lot is Empty");
    } else {
        let result = Array.from(parking);
        result.sort();
        for (let car of result) {
            console.log(car);
        }
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
)