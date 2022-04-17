function dungeonestDark(arr) {

    let dungeon = arr[0].split('|');
    let health = 100;
    let coins = 0;
    let roomCount = 0;
    let isDead = false;

    for (let i = 0; i < dungeon.length; i++) {
        let currentRoom = dungeon[i].split(' ');
        let command = currentRoom[0];
        let number = Number(currentRoom[1]);

        switch (command) {
            case 'potion':
                health += number;
                let diff = Math.abs(health - 100);
                if (health > 100) {
                    health = 100;
                    console.log(`You healed for ${number - diff} hp.`);
                } else {
                    console.log(`You healed for ${number} hp.`);
                }
                console.log(`Current health: ${health} hp.`);
                roomCount++;
                break;
            case 'chest':
                console.log(`You found ${number} coins.`);
                coins += number;
                roomCount++;
                break;
            default:
                health -= number;
                if (health > 0) {
                    console.log(`You slayed ${command}.`);
                } else {
                    console.log(`You died! Killed by ${command}.`);
                    isDead = true;
                }
                roomCount++;
                break;
        }
        if (isDead === true) {
            break;
        }
    }
    if (isDead === true) {
        console.log(`Best room: ${roomCount}`);
    } else {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])