function bitcoin(input) {

    let index = 0;
    let gramsGold = Number(input[index]);

    let bitcoinPrice = 11949.16;
    let priceGold = 67.51;
    let moneyGold = 0;
    let bitcoinCount = 0;
    let firstDayPurchase = 0;
    let moneyLeft = 0;

    for (let i = 0; i <= input.length; i++) {
        gramsGold = Number(input[index]);
        index++;
        if (i === 2) {
            gramsGold = gramsGold * 0.70;
        }
        moneyGold += gramsGold * priceGold;
        while (moneyGold >= bitcoinPrice) {
            if (bitcoinPrice === 0) {
                firstDayPurchase = 1;
            }
            moneyGold -= bitcoinPrice;
            bitcoinCount++;
        }
    }
}

bitcoin([100, 200, 300])