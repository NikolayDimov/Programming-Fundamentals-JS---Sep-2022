// with boolian
function equalSum(arr) {
    // Step 1 - creating boolean value checking if I have found equal sum
    let hasEqualSum = false;
    // Step 2 - creating for loop till array.length starting from index 0
    for (let i = 0; i < arr.length; i ++) {
        // Step 3 - creating two variables for left and right sum
        let leftSum = 0;
        let rightSum = 0;
        
        // Step 4 - creating for loop starting from index -1 till 0 decreasing with 1
        // to find out the left sum
        for (let l = i - 1; l >= 0; l--) {
            leftSum += arr[l];
        }
        // Step 5 - creating for loop till array.length step +1
        // to find out right sum
        for (let r = i + 1; r < arr.length; r++) {
            rightSum += arr[r];  
        }
        // Step 6 - checking if the left sum is equal to the right sum and if it is print the index
        if (leftSum === rightSum) {
            console.log(i);
            hasEqualSum = true;
            break;
        }
    }  
    
    if (!hasEqualSum) {
        console.log('no');
    }
}


equalSum([1, 2, 3, 3]);
equalSum([1, 2]);
equalSum([1]);
equalSum([1, 2, 3]);
equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);


// Step 1 - creating boolean value checking if I have found equal sum
// Step 2 - creating for loop till array.length starting from index 0
// Step 3 - creating two variables for left and right sum
// Step 4 - creating for loop starting from index -1 till 0 decreasing with 1
// to find out the left sum
// Step 5 - creating for loop till array.length step +1
// to find right sum
// Step 6 - checking if the left sum is equal to the right sum and if it is print the index

//____no boolian___________________________

function equalSum1(arr) {
    
    let foundIndex = 'no';
    
    for (let i = 0; i < arr.length; i ++) {
        
        let leftSum = 0;
        let rightSum = 0;
        
        
        for (let l = 0; l < i; l++) {  // разлика с горната задача -> повишаваме индекса
            leftSum += arr[l];
        }
        
        for (let r = i + 1; r < arr.length; r++) {
            rightSum += arr[r];  
        }
       
        if (leftSum === rightSum) {
            foundIndex = i;
        }
    }  
        console.log(foundIndex);
}

equalSum1([1, 2, 3, 3]);
equalSum1([1, 2]);
equalSum1([1]);
equalSum1([1, 2, 3]);
equalSum1([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);