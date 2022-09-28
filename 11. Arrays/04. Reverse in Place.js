//________________________ без създаване на нов масив

function reverceInPlace1(arr) {
    let buff = '';

    for (let i = arr.length - 1; i >= 0; i--) {
        buff += arr[i];
        buff += ' ';
    }

    console.log(buff);
}

reverceInPlace1(['a', 'b', 'c', 'd', 'e']);
reverceInPlace1(['33', '123', '0', 'dd']);
reverceInPlace1(['1', '2', '3', '4', '5', '6', '7', '8']);

//____________________ със създаване на нов масив

function reverceInPlaceWithArray(arr) {
    let buff = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        buff.push(arr[i]);
    }

    console.log(buff.join(' '));
}

reverceInPlaceWithArray(['a', 'b', 'c', 'd', 'e']);
reverceInPlaceWithArray(['33', '123', '0', 'dd']);
reverceInPlaceWithArray(['1', '2', '3', '4', '5', '6', '7', '8']);


//_____________________________ с нова променлива/буферна

    // repeat from all elements from beginning to the middle
    // - swap current element (start + i) with element in other half (end - i)
    // - use temp variable to store value during swap

    function reverceInPlace(arr) {
        for (let i = 0; i < arr.length / 2; i++) {
            let k = arr.length - 1 - i;
            let temp = arr[i];
            arr[i] = arr[k];
            arr[k] = temp;
        }
        console.log(arr.join(' '));
    }
    
    reverceInPlace(['a', 'b', 'c', 'd', 'e']);
    reverceInPlace(['33', '123', '0', 'dd']);