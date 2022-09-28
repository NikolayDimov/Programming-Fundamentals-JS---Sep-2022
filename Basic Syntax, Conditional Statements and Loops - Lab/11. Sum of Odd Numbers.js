function solve(n) {
    let totalSum = 0;
    let counter = 0;

    for (let i = 1; i <= 100; i += 2) {
        counter++;
        console.log(i);
        totalSum += i;

        if (counter === n) {
            console.log(`Sum: ${totalSum}`);
        break;
        }
    }       
}
solve(3);