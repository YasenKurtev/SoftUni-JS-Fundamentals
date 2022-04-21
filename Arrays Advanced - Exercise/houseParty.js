function houseParty(arr){

    let list = [];
    for(let i = 0; i < arr.length; i++){
        let command = arr[i].split(' ');
        if(command[1] + ' ' + command[2] === 'is going!'){
            if(list.includes(command[0])){
                console.log(`${command[0]} is already in the list!`);
            }else{
                list.push(command[0]);
            }
        }else{
            if(list.includes(command[0])){
                list.splice(list.indexOf(command[0]), 1);
            }else{
                console.log(`${command[0]} is not in the list!`);
            }
        }
    }
    console.log(list.join('\n'));
}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])
