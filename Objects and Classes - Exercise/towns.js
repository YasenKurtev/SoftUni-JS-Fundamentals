function towns(arr) {

    for (el of arr) {
        let split = el.split(" | ");
        let obj = {};
        obj.town = split[0];
        obj.latitude = Number(split[1]).toFixed(2);
        obj.longitude = Number(split[2]).toFixed(2);
        console.log(obj);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])