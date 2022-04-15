function bitcoinMining(input) {

    let index = 0;
    let gramsGold = Number(input[index]);

    let moneyGold = 0;
    let bitcoinCount = 0;
    let firstBitcoin = false;
    let firstDay = 0;
    let days = 0;

    for (let i = 0; i < input.length; i++) {
        gramsGold = Number(input[index]);
        days++;
        if (i === 2) {
            gramsGold = gramsGold * 0.70;
            index++;
        }
        moneyGold += gramsGold * 67.51;
        while (moneyGold >= 11949.16) {
            if(firstDay === 0){
                firstDay = days;
                firstBitcoin = true;
            }
            bitcoinCount++;
            moneyGold -= 11949.16;
        }
        index++;
    }
    console.log(`Bought bitcoins: ${bitcoinCount}`);
    if (firstBitcoin) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${moneyGold.toFixed(2)} lv.`);

}

bitcoinMining([100, 200, 300])