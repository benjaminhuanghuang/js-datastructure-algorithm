const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    // write your solution here
    console.log('Test ', Date(dateText2))
    return ( Date(dateText2).getTime() -  Date(dateText1).getTime()) / DAY_IN_MILLISECONDS;
}

console.log(`Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2020')}`)
