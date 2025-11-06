const sumAll = function(x, y) {
    // take in two numbers and add the all the number between x and y into the total
    if( x < 0 || y < 0 || x % 1 !== 0 || y % 1 !== 0 || typeof(x) === "string" || typeof(y) === "string") {
        return "ERROR"
    } else{
        if(x < y){
            let result = x
            for(let i = x; i <= y; i++){
                result = result + i
            }
            return result - x
        } else {
            let result = y
            for(let i = y; i <= x; i++){
                result = result + i
            }
            return result - y
        }
    }
};

// Do not edit below this line
module.exports = sumAll;
