function loadingBar(num) {

    let percent = num / 10;
    let barArr = [];

    function barChars() {
        for (let i = 1; i <= percent; i++) {
            barArr.push("%");
        }
        for (let i = percent + 1; i <= 10; i++) {
            barArr.push(".");
        }
        return barArr;
    }

    if (num === 100) {
        console.log("100% Complete!");
        console.log(`[${(barChars(num)).join('')}]`);
    } else {
        console.log(`${num}% [${(barChars(num)).join('')}]`);
        console.log("Still loading...");
    }
}

loadingBar(100)