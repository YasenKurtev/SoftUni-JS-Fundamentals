function schoolGrades(arr) {

    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' ');
        let name = tokens.shift();
        let grades = [];
        for (let grade of tokens) {
            grades.push(grade);
        }
        if (map.has(name)) {
            for (let grade of grades) {
                map.get(name).push(grade);
            }
        } else {
            map.set(name, grades);
        }
    }

    let sorted = Array.from(map).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [key, value] of sorted) {
        let sumGrades = 0;
        for (let grade of value) {
            sumGrades += Number(grade);
        }
        let average = sumGrades / value.length;
        console.log(`${key}: ${average.toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])