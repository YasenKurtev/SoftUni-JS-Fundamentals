function buildAWall(arr) {

    arr.map(Number);
    let concretePerDay = 0;
    let totalConcrete = 0;
    let concreteArr = [];

    while (arr.length !== 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 30) {
                arr.splice(i, 1);
                i--;
            } else {
                arr[i] += 1;
                concretePerDay += 195;
            }
        }
        if (concretePerDay > 0) {
            concreteArr.push(concretePerDay);
            totalConcrete += concretePerDay;
        }
        concretePerDay = 0;
    }
    if (totalConcrete > 0) {
        console.log(concreteArr.join(', '));
        console.log(`${totalConcrete * 1900} pesos`);
    }
}

buildAWall([21, 25, 28])