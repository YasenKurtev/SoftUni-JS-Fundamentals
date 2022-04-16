function spiceMustFlow(startingYield) {

    let totalSpice = 0;
    let totalDays = 0;

    while (startingYield >= 100) {
        totalSpice += startingYield;
        if (totalSpice < 26) {
            totalSpice -= totalSpice;
        } else {
            totalSpice -= 26;
        }
        startingYield -= 10;
        totalDays++;
    }
    if (totalSpice < 26) {
        totalSpice -= totalSpice;
    } else {
        totalSpice -= 26;
    }
    console.log(totalDays);
    console.log(totalSpice);
}

spiceMustFlow(111)