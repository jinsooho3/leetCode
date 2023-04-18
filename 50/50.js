/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n>0){
        for(let i = 1;;i++){
            x = x**n;
        }
    }
    else{
        x = 1/x;
        n = -n;
        for(let i = 1;;i++){
            x = x**n;
        }
    }
};
