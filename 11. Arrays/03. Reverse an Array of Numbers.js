// 1st solve_______________________
function reverse(n, arr) {
    let slice = [];
    // take slice from original array
    for (i = 0; i < n; i++) {
        slice.push(arr[i]);
    }    
    //console.log(slice);

    let result = '';
    // print new array in reverse
    for (i = slice.length - 1; i >= 0; i--) {
        result += (slice[i]);
        result += ' ';
    }
    console.log(result);  
}

reverse(3, [10, 20, 30, 40, 50]);
console.log('---');
reverse(4, [-1, 20, 99, 5]);
console.log('---');
reverse(2, [66, 43, 75, 89, 47]);

//2nd solve____________________
function reverse2(n, arr) {
    let slice = [];
    // take slice from original array
    for (i = 0; i < n; i++) {
        slice.push(arr[i]);
    }    
    //console.log(slice);

    let result = [];
    // print new array in reverse
    for (i = slice.length - 1; i >= 0; i--) {
        result.push(slice[i]);
    }
    console.log(result.join(' '));  
}

reverse2(3, [10, 20, 30, 40, 50]);
console.log('---');
reverse2(4, [-1, 20, 99, 5]);
console.log('---');
reverse2(2, [66, 43, 75, 89, 47]);

// 3rd solve____________________
function reverse3(n, arr) {

    let result = [];
    // print new array in reverse
    for (i = n - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    console.log(result.join(' '));  
}

reverse3(3, [10, 20, 30, 40, 50]);
console.log('---');
reverse3(4, [-1, 20, 99, 5]);
console.log('---');
reverse3(2, [66, 43, 75, 89, 47]);