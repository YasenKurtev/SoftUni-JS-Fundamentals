function cutAndReverse(string) {

    let firstHalf = string.substring(0, string.length / 2);
    let secondHalf = string.substring(string.length / 2, string.length);

    let reversedFirstHalf = '';
    let reversedSecondHalf = '';

    for (let i = firstHalf.length - 1; i >= 0; i--) {
        reversedFirstHalf += firstHalf[i];
    }

    for (let i = secondHalf.length - 1; i >= 0; i--) {
        reversedSecondHalf += secondHalf[i];
    }

    console.log(reversedFirstHalf);
    console.log(reversedSecondHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')