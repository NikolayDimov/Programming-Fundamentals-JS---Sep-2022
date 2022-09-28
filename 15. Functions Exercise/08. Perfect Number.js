function perfectNum(number) {
    let sumofDivisors = 0;

    for (let currNum = 1; currNum < number; currNum++) {
        if (number % currNum === 0) {
            sumofDivisors += currNum;
        }
    }

    if (sumofDivisors === number) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNum(6);

//_________________________

function perfectNum1(number) {
    let sumofDivisors = 0;

    for (let currNum = 1; currNum < number; currNum++) {
        if (number % currNum === 0) {
            sumofDivisors += currNum;
        }
    }

    let result = (sumofDivisors === number) ? 'We have a perfect number!' : "It's not so perfect.";
    console.log(result);
}

perfectNum1(6);