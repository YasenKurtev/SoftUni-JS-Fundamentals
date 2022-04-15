function login(input) {

    let user = input[0];
    let index = 1;
    let pass = input[index];

    let passSplit = user.split("");
    let reverseArray = passSplit.reverse();
    let joinArray = reverseArray.join("");

    for(let i = 1; i <= 4; i++){
        pass = input[index];
        if (joinArray === pass) {
            console.log(`User ${user} logged in.`);
            break;
        }else{
            if(i === 4){
                console.log(`User ${user} blocked!`);
                break;
            }else{
                console.log(`Incorrect password. Try again.`);
            }
        }
        index++;
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA'])