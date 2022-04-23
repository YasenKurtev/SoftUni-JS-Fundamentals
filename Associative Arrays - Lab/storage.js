function storage(arr) {

    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' ');
        let product = tokens[0];
        let quantity = Number(tokens[1]);
        if (map.has(product)) {
            let currentQuantity = map.get(product);
            let newQuantity = currentQuantity += quantity;
            map.set(product, newQuantity);
        } else {
            map.set(product, quantity);
        }
    }

    for (let el of map) {
        console.log(`${el[0]} -> ${el[1]}`);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])