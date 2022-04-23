function aMinerTask(arr) {

    let resources = {};
    let name = 0;
    let quantity = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            name = arr[i];
            if (!resources.hasOwnProperty(name)) {
                resources[name] = 0;
            }
        } else {
            quantity = Number(arr[i]);
            resources[name] += quantity;
        }
    }

    for (let key of Object.keys(resources)) {
        console.log(`${key} -> ${resources[key]}`);
    }
}

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ])