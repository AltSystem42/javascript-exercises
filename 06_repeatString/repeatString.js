const repeatString = function(str, num) {
    let result = str
    for(let i = 0; i < (num - 1); i++){
        result = result.concat(str)
    }
    if (num === 0){
        return ""
    } else if(num <= -1) {
        return "ERROR"
    } else {
        return result
    }
    
};

// Do not edit below this line
module.exports = repeatString;
