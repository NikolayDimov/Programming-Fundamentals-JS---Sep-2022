function palindrome(inputArray) {
    let arrOfNums = inputArray;

    function isPalindrom(number) {
        // 123 => [1, 2, 3]  
        // [1, 2, 3] => [3, 2, 1] => 321
        let startNum = number;
        let reversedNum = (Number(number.toString().split('').reverse().join('')));   
        if (startNum === reversedNum) {
            return true;
        } else {
            return false;
        }
    }
    
    for (let index = 0; index < arrOfNums.length; index++) {
       let currNum = arrOfNums[index];
       console.log(isPalindrom(currNum));   
    }
}

palindrome([123,323,421,121]);
//palindrome([32,2,232,1010]);


//____________for of_____________________

function main(input) {

    for (const element of input) {
        let current = String(element);
        let reversed = String(element).split('').reverse().join('');

        if (current === reversed) {
            console.log(true);
        } else {
            console.log(false);
        }
    }   
}

main([123,323,421,121]);