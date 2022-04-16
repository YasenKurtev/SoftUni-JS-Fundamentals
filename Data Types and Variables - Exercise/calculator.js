function calculator(n1, op, n2){

    if(op == '+'){
        console.log((n1 + n2).toFixed(2));
    }else if(op == '-'){
        console.log((n1 - n2).toFixed(2));
    }else if(op == '*'){
        console.log((n1 * n2).toFixed(2));
    }else if(op == '/'){
        console.log((n1 / n2).toFixed(2));
    }

}

calculator(25.5,
    '-',
    3
    )