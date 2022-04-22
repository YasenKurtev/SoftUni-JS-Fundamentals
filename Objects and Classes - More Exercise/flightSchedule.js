function flightSchedule(arr) {

    let currentFLights = arr.shift();
    let changedFLights = arr.shift();
    let flightStatus = arr.shift()[0];

    let flightsObj = {};

    for (let i = 0; i < currentFLights.length; i++) {
        let tokens = currentFLights[i].split(' ');
        let code = tokens.shift();
        let destination = tokens.join(' ');
        flightsObj[code] = {};
        flightsObj[code].Destination = destination;
        flightsObj[code].Status = "Ready to fly";
    }

    for (let i = 0; i < changedFLights.length; i++) {
        let tokens = changedFLights[i].split(' ');
        let code = tokens[0];
        let status = tokens[1];
        if (flightsObj.hasOwnProperty(code)) {
            flightsObj[code].Status = status;
        }
    }

    for (let key of Object.keys(flightsObj)) {
        if (flightsObj[key].Status === flightStatus) {
            console.log(flightsObj[key]);
        }
    }
}

flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']
])