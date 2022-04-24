function garage(arr) {

    let garage = {};

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' - ');
        let garageNumber = tokens[0];
        let property = tokens[1];
        if (!garage.hasOwnProperty(garageNumber)) {
            garage[garageNumber] = [];
        }
        let propertySplit = property.split(', ');
        let string = '';
        for (let el of propertySplit) {
            let tokens = el.split(': ');
            let type = tokens[0];
            let value = tokens[1];
            string += `${type} - ${value}, `;
        }
        let sliced = string.slice(0, string.length - 2);
        garage[garageNumber].push(sliced);
    }

    for (let [key, value] of Object.entries(garage)) {
        console.log(`Garage № ${key}`);
        for (let el of value) {
            console.log(`--- ${el}`);
        }
    }
}

garage(['1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol'])