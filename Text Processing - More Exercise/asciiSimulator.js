function asciiSimulator(arr){

    let string = arr[2];
    let firstChar = arr[0];
    let secondChar = arr[1];

    for(let i = 0; i < string.length; i++){
        if(string[i] === firstChar){
            string = string.substring(i, string.length);
            break;
        }
    }
    
    for(let i = 0; i < string.length; i++){
        if(string[i] === secondChar){
            string = string.substring(0, i);
            break;
        }
    }

    let uniqueArr = [];

    for(let i = 0; i < string.length; i++){
        if(i === 0){
            uniqueArr.push(string[i]);
        }else{
            if(!uniqueArr.includes(string[i])){
                uniqueArr.push(string[i]);
            }
        }
    }

    let sum = 0;

    for(let i = 0; i < uniqueArr.length; i++){
        let num = uniqueArr[i].charCodeAt();
        sum += Number(num);
    }

    console.log(sum);
}

asciiSimulator(['.',
'@',
'dsg12gr5653feee5'])