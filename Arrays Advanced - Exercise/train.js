function train(arr){

    let wagons = arr[0].split(' ').map(Number);
    let capacity = Number(arr[1]);
    for(let i = 2; i < arr.length; i++){
        let command = arr[i].split(' ');
        if(command[0] === 'Add'){
            wagons.push(Number(command[1]));
        }else{
            for(let j = 0; j < wagons.length; j++){
                if(wagons[j] + Number(arr[i]) <= capacity){
                    wagons[j] += Number(arr[i]);
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
)