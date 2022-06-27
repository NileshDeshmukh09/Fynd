/**
 * Accepts either an aray or a list of number Arguments 
 * @return {number}
 * In case of an array it returns the sum of items
 * In case of a list of argunments it return sum of an arguments
 */
function sum() {
    if (arguments[0] instanceof Array) {

        const arr = arguments[0];

        let result = 0;

        for (let i = 0; i < arr.length; i++) {
            result += arr[i];
        }
        return result;
    } else {
        let result = 0;

        for (let i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }
        return result;
    }


}

let primes = [2, 3, 4, 5, 6];
console.log(sum(primes))
console.log(sum(2, 3, 4, 5, 6))
