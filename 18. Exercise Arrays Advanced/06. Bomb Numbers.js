function bombSpecialNumber(array, bomb) {
    let bombNumber = bomb[0];
    let bombRadius = bomb[1];

    let indexOfBomb = array.indexOf(bombNumber);
    //console.log(indexOfBomb);

    while (indexOfBomb !== -1) {
        let startExplosionIndex = Math.max(0, indexOfBomb - bombRadius);
        //console.log(startExplosionIndex);
        let explosianLength = bombRadius * 2 + 1;
        //console.log(explosianLength);

        array.splice(startExplosionIndex, explosianLength);
        //console.log(array);

        indexOfBomb = array.indexOf(bombNumber)
    }

    let sum = array.reduce((a, b) => a + b, 0);
    console.log(sum);
}

bombSpecialNumber([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]);

bombSpecialNumber([1, 4, 4, 2, 8, 9, 1],
    [9, 3])

bombSpecialNumber([1, 7, 7, 1, 2, 3],

    [7, 1]);

//________________________________

function bomb(sequence, bombInfo) {
    const bomNumber = bombInfo[0];
    const bombPower = bombInfo[1];

    let bombIndex = sequence.indexOf(bomNumber);

    while (bombIndex !== -1) {
    sequence.splice(bombIndex + 1, bombPower);  // remove right range number
    sequence.splice(Math.max(bombIndex - bombPower, 0), bombPower + 1);  // remove left range number

    bombIndex = sequence.indexOf(bomNumber);
    }
    console.log(sequence.reduce((a, b) => a + b, 0));
}

bomb([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]);