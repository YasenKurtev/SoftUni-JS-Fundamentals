function deserializeString(arr) {

    let stringArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "end") {
            break;
        }
        let tokens = arr[i].split(':');
        let letter = tokens[0];
        let indexes = tokens[1].split('/');
        for (let index of indexes) {
            stringArr[index] = letter;
        }
    }

    console.log(stringArr.join(''));
}

deserializeString(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end']
)