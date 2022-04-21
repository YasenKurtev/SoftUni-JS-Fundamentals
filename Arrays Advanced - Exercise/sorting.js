function sorting(arr){

//    let sort = [];
//    while(arr.length !== 0){
//        sort.push(Math.max(...arr));
//        arr.splice(arr.indexOf(Math.max(...arr)), 1);
//        if(arr.length !== 0){
//        sort.push(Math.min(...arr));
//        arr.splice(arr.indexOf(Math.min(...arr)), 1);
//        }else{
//            break;
//        }
//    }
//    console.log(sort.join(' '));
    
    let sorted = [];
    while(arr.length !== 0){
        arr.sort((a, b) => b-a);
        sorted.push(arr.shift());
        sorted.push(arr.pop());
    }
    console.log(sorted.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])