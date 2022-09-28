function processOddNumber(arr) {
    // filter only elemnts at odd posiion (index)
    let filtered = arr.filter((x, i) => i % 2 == 1);

    // double filtered values
    let doubled = filtered.map(x => x * 2);

    // reverse resulting array
    let result = doubled.reverse();

    // print result
    console.log(result.join(' '));
}

processOddNumber([10, 15, 20, 25]);
processOddNumber([3, 0, 10, 4, 7, 3]);

//___________________________________

function processOddNumber1(arrayInput) {
    // filter only elemnts at odd posiion (index)
    // double filtered values
    // reverse resulting array
    // print result
    console.log(
        arrayInput
            .filter((x, i) => i % 2 == 1)
            .map(x => x * 2)
            .reverse()
            .join(' ')
        );
}

processOddNumber1([10, 15, 20, 25]);
processOddNumber1([3, 0, 10, 4, 7, 3]);

//_________________________

(numbers) => numbers
                .filter((x, i) => i % 2 == 1)
                .map(x => x * 2)
                .reverse()
                .join(' ')

console.log(processOddNumber1([10, 15, 20, 25])); 
console.log(processOddNumber1([3, 0, 10, 4, 7, 3])); 