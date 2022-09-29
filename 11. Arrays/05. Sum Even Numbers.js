function sumEvenNum(arr) {
    // for (let i = 0; i < arr.length; i++) {
    //     arr[i] = Number(arr[i]);
    // }
    
    let evenSum = 0;

    for (let numText of arr) {
        let num = Number(numText);
            if (num % 2 == 0) {
            evenSum += num;
        }
    }
    console.log(evenSum); 
}

sumEvenNum(['1','2','3','4','5','6']);
sumEvenNum(['3','5','7','9']);
sumEvenNum(['2','4','6','8','10']);