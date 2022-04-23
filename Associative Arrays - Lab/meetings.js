function meetings(arr) {

    let schedule = {};

    for (let i = 0; i < arr.length; i++) {
        let [day, name] = arr[i].split(' ');
        if (schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            schedule[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let [key, value] of Object.entries(schedule)) {
        console.log(`${key} -> ${value}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])