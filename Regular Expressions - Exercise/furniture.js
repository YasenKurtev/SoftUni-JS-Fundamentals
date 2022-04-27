function furniture(arr) {

    let pattern = />>(?<item>[A-Za-z\s]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/;
    let totalMoney = 0;
    console.log("Bought furniture:");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Purchase") {
            break;
        }
        if ((validPattern = pattern.exec(arr[i])) !== null) {
            let item = validPattern.groups['item'];
            let price = Number(validPattern.groups['price']);
            let quantity = Number(validPattern.groups['quantity']);
            console.log(item);
            totalMoney += price * quantity;
        }
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);

}

furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'])