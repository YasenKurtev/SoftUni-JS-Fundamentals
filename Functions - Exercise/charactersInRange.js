function charactersInRange(char1, char2){

    let char1Code = char1.charCodeAt();
    let char2Code = char2.charCodeAt();
    let charArr = [];

    if(char2Code < char1Code){
        for(let i = char2Code + 1; i < char1Code; i++){
            charArr.push(String.fromCharCode(i));
        }
    }else{
        for(let i = char1Code + 1; i < char2Code; i++){
            charArr.push(String.fromCharCode(i));
        }
    }
    console.log(charArr.join(' '));
}

charactersInRange('C',
'#'
);
