function requiredReading(currentPages, pagesFor1Hour, days){

    let totalTimeToRead = currentPages / pagesFor1Hour;
    let hoursPerDay = totalTimeToRead / days;

    console.log(hoursPerDay);

}

requiredReading(212, 20, 2)