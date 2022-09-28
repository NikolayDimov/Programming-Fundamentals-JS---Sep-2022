function addAndSubtract(arr) {
      let myArr = arr;
      let sumOfOriginalArray = 0;
      let modifyArraySum = 0;
      let myArrLength = myArr.length; //записваме дължината на масива в променлива, за да не смята 
                                      //всеки път фор цикъла цялата функция arrey.length

      // Step 1 - creating for cicle for loop till arrey.length
      for (let index = 0; index < myArrLength; index++) {
        // Spet 2 - filling the sum of the original array
        sumOfOriginalArray += myArr[index];
        // Step 3 - searching for odd and even numbers
        if (myArr[index] % 2 === 0) {
            myArr[index] += index;
        } else {
            myArr[index] -= index;
        } 
        // Step 4 - filling the sum of modify array
        modifyArraySum += myArr[index];
    }
    // printing the array
    console.log(myArr);
    console.log(sumOfOriginalArray);
    console.log(modifyArraySum);
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);