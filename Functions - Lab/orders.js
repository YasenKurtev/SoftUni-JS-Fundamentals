function orders(product, quantity) {

    let price = () => product * quantity;

    switch (product) {
        case 'coffee':
            product = 1.50;
            console.log(price().toFixed(2));
            break;
        case 'water':
            product = 1.00;
            console.log(price().toFixed(2));
            break;
        case 'coke':
            product = 1.40;
            console.log(price().toFixed(2));
            break;
        case 'snacks':
            product = 2.00;
            console.log(price().toFixed(2));
            break;
    }
}

orders("water",
    5
)