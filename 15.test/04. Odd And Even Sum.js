function solve(n) {
    let nToString = String(n);
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < nToString.length; i++) {
        let currNum = Number(nToString[i])
        if(currNum % 2 === 0) {
            evenSum += currNum;
        } else {
            oddSum += currNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435)