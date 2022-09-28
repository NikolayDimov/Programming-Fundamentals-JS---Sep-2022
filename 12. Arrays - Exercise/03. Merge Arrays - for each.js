function mergeArrays(arrOne, arrTwo) {

    arrOne.forEach(elementOne => {
        arrTwo.forEach(elementTwo => {
            if (elementOne === elementTwo) {
                console.log(elementOne);
            }
        });
    });
}  

mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);

mergeArrays(
    ['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']
);

