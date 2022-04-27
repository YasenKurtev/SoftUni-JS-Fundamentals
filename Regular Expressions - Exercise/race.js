function race(arr) {

    let names = arr.shift().split(', ');
    let people = {};

    for (let name of names) {
        people[name] = 0;
    }

    for (let string of arr) {
        if (string === "end of race") {
            break;
        }
        let regex1 = /[a-z]/gi;
        let name = string.match(regex1).join('');
        let regex2 = /[0-9]/g;
        let distanceArr = string.match(regex2);
        let distance = 0;
        for (let num of distanceArr) {
            distance += Number(num);
        }
        if (people.hasOwnProperty(name)) {
            people[name] += distance;
        }
    }

    let sorted = Object.entries(people).sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);

    for (let i = 0; i < 3; i++) {
        let name = sorted[i][0];
        if (i === 0) {
            console.log(`${i + 1}st place: ${name}`);
        } else if (i === 1) {
            console.log(`${i + 1}nd place: ${name}`);
        } else if (i === 2) {
            console.log(`${i + 1}rd place: ${name}`);
        }
    }
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])