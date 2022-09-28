function biggestNum(n1, n2, n3) {
    
    let arr = new Array(n1, n2, n3);
    let maxNum = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    console.log(maxNum);
}

biggestNum(-2, 7, 3);
biggestNum(130, 5, 99);
biggestNum(43, 43.2, 43.1);