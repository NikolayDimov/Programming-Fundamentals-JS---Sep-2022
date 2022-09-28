function maxNumber(arr) {
    // Step 1 - creating new array in which we will save topinteger
    let topIntegerArr = [];
    let arrayL = arr.length;
    // Step 2 - creating for loop till array.length index ++
    for (let i = 0; i < arrayL; i++) {
        // Step 3 - taking the current element from our array on that step
        let num1 = arr[i];
        // creating a boolean value for the biggest integer
        let isTopInteger = true;
        // Step 4 - creating for loop till array.length index++
        // which will index + 1 // currentEl = 24
        for (let j = i + 1; j < arrayL; j++) {
            // creating next element from the array varaible
            let num2 = arr[j];
            // creating conditional expression currentElement <= num2
            if (num1 <= num2) {
                isTopInteger = false;
                break;
            }
        }
        // crating conditional expression isTopInteger then push it to the topIntegerArray
        if (isTopInteger) {
            topIntegerArr.push(num1);
        }      
    }
    // final Step printing the topIntArr
    console.log(topIntegerArr.join(' '));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);