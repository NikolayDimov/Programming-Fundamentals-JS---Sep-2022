function printAndSum(start, end) {
    start = Number(start);
    end = Number(end);
    let sum = 0;
    let squence = '';

    for (let i = start; i <= end; i++) {
        squence += i + ' ';
        sum += i;
    }
    console.log(squence.trim());
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
//printAndSum(0, 26);
//printAndSum(50, 60);