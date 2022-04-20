function repeatString(string, repeat){

    let newString = '';

    for(let i = 1; i <= repeat; i++){
        newString += string;
    }
    
    return newString;
}

console.log(repeatString("abc", 3));