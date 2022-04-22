function storeProvision(stock, orders) {

    let store = {};

    for (let i = 0; i < stock.length; i += 2) {
        let product = stock[i];
        let quantity = stock[i + 1];
        store[product] = Number(quantity);
    }

    for (let i = 0; i < orders.length; i += 2) {
        let product = orders[i];
        let quantity = orders[i + 1];
        if(store.hasOwnProperty(product)){
            store[product] += Number(quantity);
        }else{
            store[product] = Number(quantity);
        }
    }

    for (let key of Object.keys(store)) {
        console.log(`${key} -> ${store[key]}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])