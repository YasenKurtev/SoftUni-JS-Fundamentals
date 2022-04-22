function inventory(arr) {

    let heroesArr = [];

    for (let i = 0; i < arr.length; i++) {
        let line = arr[i].split(' / ');
        let items = line[2].split(', ');
        heroesArr.push(
            {
                Hero: line[0],
                level: Number(line[1]),
                items: items.join(', ')
            }
        )
    }
    heroesArr.sort((a, b) => a.level - b.level);

    for (el of heroesArr) {
        for (let key of Object.keys(el)) {
            if (key === "Hero") {
                console.log(`${key}: ${el[key]}`);
            } else {
                console.log(`${key} => ${el[key]}`);
            }
        }
    }
}


inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])