function catalogue(arr) {

    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let split = arr[i].split(' : ');
        let product = split[0];
        let price = split[1];
        obj[product] = Number(price);
    }

    let sorted = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

    let previous = 0;

    for (let el of sorted) {
        if (el[0][0] === previous) {
            console.log(`  ${el[0]}: ${el[1]}`);
        } else {
            console.log(el[0][0]);
            console.log(`  ${el[0]}: ${el[1]}`);
        }
        previous = el[0][0];
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])