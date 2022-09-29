function sumFirstLast(numbers) {
    let first = numbers[0];
    let last = numbers[numbers.length - 1];
    let sum = first + last;

    console.log(sum);
}

sumFirstLast([20, 30, 40]);
sumFirstLast([10, 17, 22, 33]);
sumFirstLast([11, 58, 69]);