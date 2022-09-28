function commonElemnts(arrayOne, arrayTwo) {
    //Step 1 - creating foor loop till arrayOne.length
    for (let i = 0; i < arrayOne.length; i++) {
        // Step 2 - creating 2nd for loop till arrayTwo.length
        for (let j = 0; j < arrayTwo.length; j++) {
            // Step 3 - checking if arrayOne[i] === arrayTwo[j]
            // and if there is a match then print it
            if (arrayOne[i] === arrayTwo[j]) {
                console.log(arrayOne[i]);
            }
        }
    } 
}

commonElemnts(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);

commonElemnts(
    ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
);