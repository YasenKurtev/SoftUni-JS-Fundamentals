function kingsDPyramid(size, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let steps = 1;

    while (size > 1) {
        let perimeterDecoMaterial = (size * 4 - 4) * increment;
        stone += (size * size - perimeterDecoMaterial) * increment;
        if (size - 2 < 1) {
            gold = perimeterDecoMaterial;
        } else {
            if (steps % 5 === 0) {
                lapis += perimeterDecoMaterial;
            } else {
                marble += perimeterDecoMaterial;
            }
        }
        steps++;
        size -= 2;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(steps * increment)}`);
}

kingsDPyramid(23,
    0.5)