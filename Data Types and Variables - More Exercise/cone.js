function cone(radius, height){

    let V = 1 / 3 * Math.PI * radius * radius * height;
    let S = Math.PI * radius * radius;
    let s = Math.sqrt(radius * radius + height * height);
    let B = Math.PI * radius * s;
    let S1 = S + B;

    console.log(`volume = ${V.toFixed(4)}`);
    console.log(`area = ${S1.toFixed(4)}`);

}

cone(3, 5)