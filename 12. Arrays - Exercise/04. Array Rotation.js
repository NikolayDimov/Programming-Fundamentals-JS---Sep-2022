function arrayRotation(array, rotation) {
    // Step 1 - creating a for loop till the number of rotation 
    // The complexity of the alogorithm will 0(n)

    for (let currRotation = 0; currRotation < rotation; currRotation++) {
        // for (let currRotation = 1; currRotation <= rotation; currRotation++)

        // Step 2 - removing and saving the value of the current itaration index of the array
        let currNum = array.shift();
        // Step 3 - adding the value of curr element to the end of our array
        array.push(currNum); 
    }
    // Final Step - printing the array
    console.log(array.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);


// array.shift(); изваждаме елементи от началото на масива
// array.push();  добавяме тези елементи в края на масива

// array.pop();  изважда елементи от края на масива
// array.unshift(); добавя елементи в началото на масива