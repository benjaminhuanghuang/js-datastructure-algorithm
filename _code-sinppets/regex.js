/*
Regular expression check has to have an optional +91 or 0 in the beginning, 
then an optional space and 10 digits

*/
const number = '+919876543210';

function validateMobile(number) {
    return /^(\+91|[0])?\s?\d{10}$/.test(number);
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)

