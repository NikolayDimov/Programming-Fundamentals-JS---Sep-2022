function subset(arr) {
    let max = Number.MIN_SAFE_INTEGER;
    let maxNum = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            maxNum.push(arr[i]); // maxNum.push(max);
        }  
    }
    console.log(maxNum.join(' ')); 
}

subset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
subset([1, 2, 3, 4]);
subset([20, 3, 2, 15, 6, 1]);
subset([-1, 0, 1, 2, 3, -3, 4, -5]);