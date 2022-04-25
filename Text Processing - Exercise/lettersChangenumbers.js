function lettersChangeNumbers(string) {

    let numbers = string.split(' ');
    let total = 0;

    for (let element of numbers) {
        if (element.length > 0) {
            let number = Number(element.substring(1, element.length - 1));
            let firstLetter = element.substring(0, 1);
            let secondLetter = element.substring(element.length - 1, element.length);

            if (firstLetter === firstLetter.toUpperCase()) {
                let divide = firstLetter.charCodeAt() - 64;
                number = number / divide;
            } else {
                let multiply = firstLetter.charCodeAt() - 96;
                number = number * multiply;
            }

            if (secondLetter === secondLetter.toUpperCase()) {
                let substract = secondLetter.charCodeAt() - 64;
                number = number - substract;
            } else {
                let add = secondLetter.charCodeAt() - 96;
                number = number + add;
            }

            total += number;
        }
    }

    console.log(total.toFixed(2));
}

lettersChangeNumbers('a1A')