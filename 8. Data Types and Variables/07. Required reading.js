function reading(numberOfPages, pagesReadIn1Hour, numberOfDays) {
    let totalTimeToReadTheBook = numberOfPages / pagesReadIn1Hour;
    let requiredHoursPerDay = totalTimeToReadTheBook / numberOfDays;
    console.log(requiredHoursPerDay);
}
reading(212, 20, 2);
reading(432, 15, 4);