function armies(arr) {

    let leaders = {};

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes("arrives") || arr[i].includes("defeated")) {
            let tokens = arr[i].split(' ');
            let command = tokens.pop();
            let leader = tokens.join(' ');
            if (!leaders.hasOwnProperty(leader) && command === "arrives") {
                leaders[leader] = [];
            } else if (leaders.hasOwnProperty(leader) && command === "defeated") {
                delete leaders[leader];
            }
        } else if (arr[i].includes(":")) {
            let tokens = arr[i].split(': ');
            let leader = tokens[0];
            let splited = tokens[1].split(', ');
            let army = splited[0];
            let count = Number(splited[1]);
            if (leaders.hasOwnProperty(leader)) {
                leaders[leader].push(army);
                leaders[leader].push(count);
            }
        } else if (arr[i].includes("+")) {
            let tokens = arr[i].split(' + ');
            let army = tokens[0];
            let count = tokens[1];
            for (let value of Object.values(leaders)) {
                if (value.includes(army)) {
                    value[value.indexOf(army) + 1] += Number(count);
                }
            }
        }
    }

    for (let value of Object.values(leaders)) {
        let total = 0;
        for (let i = 1; i < value.length; i += 2) {
            total += Number(value[i]);
        }
        value.unshift(total);
    }

    let sortedTotal = Object.entries(leaders).sort(([keyA, valueA], [keyB, valueB]) => valueB[0] - valueA[0]);

    for (let key of sortedTotal) {
        let leaderName = key.shift();
        let rest = key.shift();
        let totalArmy = rest.shift();
        let curr = [];
        for (let i = 0; i < rest.length; i++) {
            let armyName = rest.shift();
            let armyCount = rest.shift();
            curr.push([armyName, armyCount]);
        }
        let sorted = curr.sort((a, b) => b[1] - a[1]);
        console.log(`${leaderName}: ${totalArmy}`);
        for (let el of sorted) {
            let armyName = el[0];
            let armyCount = Number(el[1]);
            console.log(`>>> ${armyName} - ${armyCount}`);
        }
    }
}

armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423'])