function solve(arr) {
    function calcSum(a, b) {
      return a + b;
    }
   
    let sumOfRowOne = arr[0].reduce(calcSum);
    let sumOfRowLast = arr[arr.length-1].reduce(calcSum);
   
    if (sumOfRowOne == sumOfRowLast) {
      let sumOfLeftCol = 0;
      let sumOfRightCol = 0;
      for (let i = 0; i < arr.length; i++) {
        sumOfLeftCol += arr[i][0];
        sumOfRightCol += arr[i][arr.length-1];
        
      }
      return sumOfLeftCol == sumOfRightCol &&  sumOfRightCol == sumOfRowOne ? 
        true : false
   
  } else {
      return false;
    } 
  }