function lift(input) {
    let waitingPeople = Number(input.shift());
    let currentState = input.pop().split(' ').map(Number);

    for (let i = 0; i < currentState.length; i++) {
        if (currentState[i] < 4) {
            if (waitingPeople >= 4 - currentState[i]) {
                waitingPeople -= 4 - currentState[i];
                currentState[i] = 4;
            } else {
                currentState[i] += waitingPeople;
                waitingPeople = 0;
            }
        }        
    }

    if (waitingPeople === 0) {
        console.log(`The lift has empty spots!
        ${currentState.join(' ')}`);
    } else {
        console.log(`There isn't enough space! ${waitingPeople} people in a queue!
        ${currentState.join(' ')}`);
    }
}

lift(["15","0 0 0 0 0"])

lift(["20","0 2 0"])
   