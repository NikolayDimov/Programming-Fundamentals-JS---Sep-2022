function rotateArr(array) {
   
    let currRotation = array.pop();
    //console.log(currRotation);
    
    // Step 1 - creating a for loop till the number of rotation 
    for (let index = 0; index < currRotation; index++) {
        // Step 2 - removing and saving the value of the current itaration index of the array
        let currNum = array.pop();
        //console.log(currNum);
        // Step 3 - adding the value of curr element to the beginning of our array
        array.unshift(currNum); 
    }
    // Final Step - printing the array
    console.log(array.join(' '));
}

rotateArr(['1', '2', '3', '4', '2']);
rotateArr(['Banana', 'Orange', 'Coconut', 'Apple', '15']);


// array.shift(); изваждаме елементи от началото на масива
// array.unshift(); добавя елементи в началото на масива

// array.pop();  изважда елементи от края на масива
// array.push();  добавяме тези елементи в края на масива
