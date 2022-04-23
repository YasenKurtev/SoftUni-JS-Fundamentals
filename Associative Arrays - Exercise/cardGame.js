function cardGame(arr) {

    let players = {};

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(': ');
        let name = tokens[0];
        let cardsDrawn = tokens[1].split(', ');
        if (players.hasOwnProperty(name)) {
            for (let card of cardsDrawn) {
                if (!players[name].includes(card)) {
                    players[name].push(card);
                }
            }
        } else {
            players[name] = [];
            for (let card of cardsDrawn) {
                if (!players[name].includes(card)) {
                    players[name].push(card);
                }
            }
        }
    }

    for (let [key, value] of Object.entries(players)) {
        let total = 0;
        for (let card of value) {
            let power = 0;
            let type = 0;
            let sum = 0;

            if (card.substring(card.length - 1) === "S") {
                type = 4;
            } else if (card.substring(card.length - 1) === "H") {
                type = 3;
            } else if (card.substring(card.length - 1) === "D") {
                type = 2;
            } else if (card.substring(card.length - 1) === "C") {
                type = 1;
            }

            if (card[0] === "J") {
                power = 11;
            } else if (card[0] === "Q") {
                power = 12;
            } else if (card[0] === "K") {
                power = 13;
            } else if (card[0] === "A") {
                power = 14;
            } else {
                power = Number(card.substring(0, card.length - 1));
            }

            sum = power * type;
            total += sum;
        }
        console.log(`${key}: ${total}`);
    }
}

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
])