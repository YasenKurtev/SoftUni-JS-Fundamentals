function partyTime(arr) {

    let guests = {};

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "PARTY") {
            arr.shift();
            for (let i = 0; i < arr.length; i++) {
                if (guests.hasOwnProperty(arr[i])) {
                    if (guests[arr[i]] > 1) {
                        guests[arr[i]] -= 1;
                    } else if (guests[arr[i]] === 1) {
                        delete guests[arr[i]];
                    }
                }
                arr.shift();
                i = -1;
            }
        } else {
            if (guests.hasOwnProperty(arr[i])) {
                let prevCount = guests[arr[i]];
                let newCount = prevCount + 1;
                guests[arr.shift()] = newCount;
                i = -1;
            } else {
                guests[arr.shift()] = 1;
                i = -1;
            }
        }
    }

    let result = Object.keys(guests);
    let vip = [];
    let regular = [];

    for (let guest of result) {
        if (guest.charCodeAt(0) >= 48 && guest.charCodeAt(0) <= 57) {
            vip.push(guest);
        } else {
            regular.push(guest);
        }
    }

    console.log(result.length);

    if (vip.length > 0) {
        console.log(vip.join('\n'));
    }
    if (regular.length > 0) {
        console.log(regular.join('\n'));
    }
}

partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
])