/*

Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example:
Given a = 1 and b = 2, return 3.

*/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    if (b === 0) {
        return a;
    }
    else {
        return getSum( a ^ b, (a & b) << 1);
    }
};