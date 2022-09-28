function sumDitids(num) {
    let sum = 0;
    let numAsString = String(num);

    for (let el of numAsString) {
        sum += Number(el)
    }

    console.log(sum);
}

sumDitids(245678);
sumDitids(97561);
sumDitids(543);