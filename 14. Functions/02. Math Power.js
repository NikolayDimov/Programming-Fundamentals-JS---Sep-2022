function mathPower(a, b) {
    
    let power = Math.pow(a, b);
    console.log(power);
}

mathPower(2, 8);
mathPower(3, 4)

//____________________________

function mathPower1(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result = result * a;
    }

    console.log(result);
}

mathPower1(2, 8);
mathPower1(3, 4)