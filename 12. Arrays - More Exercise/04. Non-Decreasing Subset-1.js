function solve3(arr) {
    let max = arr[0];
    let result = arr.filter(el => {
        if (el >= max) {
            max = el;
        }
        return el >= max;
    });
    console.log(result.join(' '));
}


solve3([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve3([1, 2, 3, 4]);
solve3([20, 3, 2, 15, 6, 1]);
solve3([-1, 0, 1, 2, 3, -3, 4]);