function mergeArrays(arrayOne, arrayTwo) {
    // Step 1 - creating new array
    let arrayThird = [];
    // Step 2 -vreating for loop till arrayOne.length
    for (let index = 0; index < arrayOne.length; index++) {
       // Step 3 - checking if index is odd or even number
       if (index % 2 === 0) {
        // Step 4 - add into the third array the sum of both elements at that index
        // arrayOne[index] + arrayTwo[index]
        arrayThird.push(Number(arrayOne[index]) + Number(arrayTwo[index]))
       } else {
        // Step 5 - add the concatenation of both elements at that index
        arrayThird.push(`${arrayOne[index]}${arrayTwo[index]}`)
       }
    }   
    // Step 6 - printing the new array
    console.log(arrayThird.join(' - '));
}

mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);

mergeArrays(
    ['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']
);