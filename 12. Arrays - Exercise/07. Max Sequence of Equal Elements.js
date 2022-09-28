function maxSequenceOfEl(arr) {
    
    let maxSequence = []; // creating an empty array - the final sequence

    for (let index = 0; index < arr.length; index++) {
        let currentSequence = []; // secondary array saving the current longest sequence
                                // on every step refresh the array
        for (let j = index; j < arr.length; j++) {
            if (arr[index] === arr[j]) {
                currentSequence.push(arr[j]);
            } else {
                break;
            } 
            if (currentSequence.length > maxSequence.length) {
                maxSequence = currentSequence;
            }
        }   
    }

    console.log(maxSequence.join(' '));   
}

maxSequenceOfEl([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEl([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEl([4, 4, 4, 4]);
maxSequenceOfEl([0, 1, 1, 5, 2, 2, 6, 3, 3]);