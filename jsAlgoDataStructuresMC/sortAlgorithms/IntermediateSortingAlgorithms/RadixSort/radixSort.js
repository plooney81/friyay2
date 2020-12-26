//* Radix Sort Helper Functions - getDigit
//? this function returns the digit of a number at a given place
// getDigit(12345, 0) //5
// getDigit(12345, 1) //4
// getDigit(12345, 2) //3

const getDigit = (num, place) => {
    let str = num.toString()
    return place > str.length - 1 ? 0 : parseInt(str.slice(str.length - 1 - place, str.length - place));
}
// Math way
const getDigit2 = (num, place) => {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}