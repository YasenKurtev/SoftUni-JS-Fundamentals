function convertToObject(string) {

    let obj = JSON.parse(string);

    let entries = Object.entries(obj);

    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
    /*    let obj = JSON.parse(string);
    
        for (let key of Object.keys(obj)) {
            console.log(`${key}: ${obj[key]}`);
        }
    */
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')