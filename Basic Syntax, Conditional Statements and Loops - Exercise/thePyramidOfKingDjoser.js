function thePyramidOfKingDjoser(width, height) {

    let block = 1 * 1 * height;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let step = 0;

    for (let i = width; i >= 1; i = i - 2) {
        step++;
        let base = i* i * height;
        let outer = (i * 4 - 4) * height;
        if (i - 2 < 1) {
            gold = base;
        } else {
            stone += (base - outer) * height / block;
            if (step % 5 === 0) {
                lapis += (outer * height) / block;
            } else {
                marble += (outer * height) / block;
            }
        }

    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(step * height)}`);
}

thePyramidOfKingDjoser(23,
    0.5
    
    
    
    
    
    
    

)