function makeADictionary(arr) {

    let dictionary = {};

    for (let i = 0; i < arr.length; i++) {
        let parsed = JSON.parse(arr[i]);
        let term = Object.keys(parsed);
        let definition = Object.values(parsed);
        if (dictionary.hasOwnProperty(term)) {
            dictionary[term] = definition
        } else {
            dictionary[term] = definition;
        }
    }

    let sorted = Object.entries(dictionary).sort();

    for (let el of sorted) {
        console.log(`Term: ${el[0]} => Definition: ${el[1]}`);
    }
}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])