function numberModification2(number) {
    const getDigitsAverage = num => num.toString().split('').map(Number).reduce((a, b) => a + b, 0) / num.toString().length;
    while (getDigitsAverage(number) < 5) number += '9';
    console.log(number);
}

numberModification2(101);

//______________________________

function modificateNumber(number) {
    let num = number.toString();
    let sum = 0;
  
    const append = n => (num += n);
  
    while (sum / num.length <= 5) {
  
      for (let i = 0; i < num.length; i++) {
        let n = Number(num[i]);
        sum += n;
      }
  
      if (sum / num.length <= 5) {
        append(9);
        sum = 0;
      }
    }
    
    console.log(num);
  }

  modificateNumber(101);

  //_______________________________________
  function numberModification(modifiedNumber) {
    while (getAverage(modifiedNumber) < 5) {
        modifiedNumber += '9';
    }
    console.log(modifiedNumber);

    function getSum(number) {
        let numToString = number.toString();
        let sum = 0;
        for (let i = 0; i < numToString.length; i++) {
            sum += Number(numToString[i]);
        }
        return sum;
    }

    function getAverage(num) {
        return getSum(num) / num.toString().length;
    }

    // 1019 -> sum 11 / 4 (num.length) = 2.75 < 5
    // 10199 -> sum 20 / 5 (num.length) = 4 < 5
    // 101999 -> sum 29 / 6 (num.length) = 4.83 < 5
    // 1019999 -> sum 38 / 7 (num.length) = 5.42 > 5    loop end
}
numberModification(101);