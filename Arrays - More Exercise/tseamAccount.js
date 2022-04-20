function tseamAccount(arr){

    let account = arr[0].split(' ');

    for(let i = 1; i < arr.length; i++){
        let currentGame = arr[i].split(' ');
        if(currentGame[0] === 'Install'){
            if(account.includes(currentGame[1]) === false){
                account.push(currentGame[1]);
            }
        }else if(currentGame[0] === 'Uninstall'){
            if(account.includes(currentGame[1]) === true){
                account.splice(account.indexOf(currentGame[1]), 1);
            }
        }else if(currentGame[0] === 'Update'){
            if(account.includes(currentGame[1]) === true){
                account.splice(account.indexOf(currentGame[1]), 1);
                account.push(currentGame[1]);
            }
        }else if(currentGame[0] === 'Expansion'){
            let expansion = currentGame[1].split('-');
            if(account.includes(expansion[0]) === true){
                account.splice((account.indexOf(expansion[0]) + 1), 0,  expansion.join(':'));
            }
        }else if(arr[i] === 'Play!'){
            console.log(account.join(' '));
            break;
        }
    }
}

tseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']

)