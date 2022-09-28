function mergeArrays(arrayOne, arrayTwo) {
    let arrayThird = arrayOne.map((eL, i) =>
        i % 2 === 0 ? Number(eL) + Number(arrayTwo[i]) : eL + arrayTwo[i]
        );
    console.log(arrayThird.join(' - '));
}

mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);

mergeArrays(
    ['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']
);