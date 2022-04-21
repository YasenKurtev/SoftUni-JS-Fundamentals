function gladiatorInventory(arr) {

    let inventory = arr.shift(arr[0]).split(' ');
    for (let el of arr) {
        let command = el.split(' ');
        let operation = command[0];
        if (operation === "Buy") {
            let equipment = command[1];
            if (exists(equipment, inventory) === false) {
                inventory.push(equipment);
            }
        } else if (operation === "Trash") {
            let equipment = command[1];
            let index = inventory.indexOf(equipment);
            if (exists(equipment, inventory) === true) {
                inventory.splice(index, 1);
            }
        } else if (operation === "Repair") {
            let equipment = command[1];
            let index = inventory.indexOf(equipment);
            if (exists(equipment, inventory) === true) {
                let item = inventory.splice(index, 1);
                inventory.push(item[0]);
            }
        } else if (operation === "Upgrade") {
            let equipment = command[1].split('-');
            let index = inventory.indexOf(equipment[0]);
            if (exists(equipment[0], inventory) === true) {
                let item = `${equipment[0]}:${equipment[1]}`;
                inventory.splice(index + 1, 0, item);
            }
        }
    }
    console.log(inventory.join(' '));

    function exists(equipment, arr) {
        if (arr.includes(equipment)) {
            return true;
        } else {
            return false;
        }
    }
}

gladiatorInventory
    (['SWORD Shield Spear',
        'Trash Bow',
        'Repair Shield',
        'Upgrade Helmet-V']

    )