function valueOfstring(arr) {

    let string = arr[0];
    let type = arr[1];
    let total = 0;


    if (type === "UPPERCASE") {
        for (let i = 0; i < string.length; i++) {
            let letter = string[i];
            if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
                total += Number(letter.charCodeAt());
            }
        }
    } else if (type === "LOWERCASE") {
        for (let i = 0; i < string.length; i++) {
            let letter = string[i];
            if (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) {
                total += Number(letter.charCodeAt());
            }
        }
    }
    console.log(`The total sum is: ${total}`);
}

valueOfstring(['AC/DC',
'UPPERCASE']
)