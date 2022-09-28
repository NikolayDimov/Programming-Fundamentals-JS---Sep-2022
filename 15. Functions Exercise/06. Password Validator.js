// function passwordValidator(password) {

//     function isLengthEnought(stringPassword) {
//         return stringPassword.length >= 6 && stringPassword.length <= 10;  
//     }
//     //console.log(isLengthEnought('login'));

//     function isOnlyLettersAndDigits(stringPassword) {
//         // 'hello' => 'h', 'e', 'l'.....
//         for (let currCharIndex of stringPassword) {
//             let currChar = currCharIndex.charCodeAt(0);
//             if (
//                 !(currChar >= 48 && currChar <= 57) &&
//                 !(currChar >= 65 && currChar <= 90) && 
//                 !(currChar >= 97 && currChar <= 122)
//                 ) {
//                 return false;
//             } 
//         }
//         return true;
//     }

//     function isHavingAtleastTwoDigits(stringPassword) {
//         let count = 0;
//         for (let charIndex of stringPassword) {
//             let currChar = charIndex.charCodeAt(0);
//             if(currChar >= 48 && currChar <= 57) {
//                 count++;
//             } 
//         } 
//         return count >= 2 ? true : false;
//     }
    
//     let isLengthValid = isLengthEnought(password);
//     let isLettersAndDigitsOnly = isOnlyLettersAndDigits(password);
//     let isContainingAtleastTwoDigits = isHavingAtleastTwoDigits(password);


//     if (isLengthValid && isLettersAndDigitsOnly && isContainingAtleastTwoDigits) {
//         console.log('Password is valid');  
//     }

//     if (!isLengthValid) {
//         console.log('Password must be between 6 and 10 characters'); 
//     }

//     if (!isLettersAndDigitsOnly) {
//         console.log('Password must consist only of letters and digits');
//     }

//     if (!isContainingAtleastTwoDigits) {
//         console.log('Password must have at least 2 digits');
//     }
// }

// passwordValidator('logIn');
// passwordValidator('MyPass123');


//________________________________

function passValid(password) {
    
    function isLengthBetweenSixAndTen(string) {
        if (string.length >= 6 && string.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function isOnlyLettersAndDigits(string) {
        for (let char of string) {
            let charCode = char.charCodeAt(0);
            if (!(charCode >= 48 && charCode <= 57) &&
                !(charCode >= 65 && charCode <= 90) &&
                !(charCode >= 97 && charCode <= 122)
            ) {
                return false;
            }
        }
        return true;
    }

    function hasAtLeastTwoDigits(string) {
        let counter = 0;
        
        for (let char of string) {
            let charCode = char.charCodeAt(0);

            if (charCode >= 48 && charCode <= 57) {
                counter++;
            }
        }
        return counter >= 2;

        // if (counter >= 2) {
        //     return true;
        // } else {
        //     return false;
        // }

    }

    let isLengthValid = isLengthBetweenSixAndTen(password);
    let containsLettersAndDigits = isOnlyLettersAndDigits(password);
    let containsAtLeastTwoDigits = hasAtLeastTwoDigits(password);

    if (isLengthValid && containsLettersAndDigits && containsAtLeastTwoDigits) {
        console.log('Password is valid');
    }

    if (!isLengthValid) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (!containsLettersAndDigits) {
        console.log('Password must consist only of letters and digits'); 
    }

    if (!containsAtLeastTwoDigits) {
        console.log('Password must have at least 2 digits');
    }
}

passValid('logIn');