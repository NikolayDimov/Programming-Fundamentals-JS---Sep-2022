function positiveAndNegative(input) {
    let result = [];

    for (let element of input) {
        element = Number(element);
        if (element < 0) {
            result.unshift(element);
        } else {
            result.push(element);
        }
    }
    // for (let element of result) {
    //     console.log(element);
    // }  

    console.log(result.join('\n'));
}

positiveAndNegative(['7', '-2', '8', '9']);
console.log('---------');
positiveAndNegative(['3', '-2', '0', '-1']);

//______________не е за тази задача______
function solve(input) {
    let result = input.sort((a, b) => a - b);
    console.log(result.join('\n'));
}
solve(['7', '-2', '8', '9']);
