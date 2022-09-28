// sorting ascending order
function sortAscending(n1, n2, n3) {

    let arr = new Array(n1, n2, n3); // creating new Array
    //console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
          }
        }
      }
      console.log(arr.join('\n'));  
}

sortAscending(4, 32, 2,); 
sortAscending(2, 1, 3);

// sorting descending order
function sortDescending(n1, n2, n3) {

    let arr = new Array(n1, n2, n3)
    //console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] < arr[j]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
          }
        }
      }
      console.log(arr.join('\n'));  
}

sortDescending(4, 32, 2,); 
sortDescending(2, 1, 3);

