/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let ans = 0;
  let minus = false;

  if (x < 0) minus = true;
  if (0 <= x && x < 10) return x;

  let temp = Math.abs(x).toString().split("").reverse();
  ans = parseInt(temp.join(""));
  if (minus) ans *= -1;

  return ans >= -Math.pow(2, 31) && ans <= Math.pow(2, 31) - 1 ? ans : 0;
};
