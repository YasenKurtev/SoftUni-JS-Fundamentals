function addressBook(arr) {

    let addressBook = {};

    for (let i = 0; i < arr.length; i++) {
        let [name, address] = arr[i].split(':');
        addressBook[name] = address;
    }

    let entries = Object.entries(addressBook);
    entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (let el of entries) {
        let name = el[0];
        let address = el[1];
        console.log(`${name} -> ${address}`);
    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])