function reverseString(input) {
    let input1 = String(input);
    let result = '';

    for (let i = input1.length - 1; i >= 0 ; i--) {
        result += input1[i];
        
    }

    console.log(result);
}

reverseString('Hello');
reverseString('SoftUni');
reverseString(1234);