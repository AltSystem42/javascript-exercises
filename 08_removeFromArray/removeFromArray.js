const removeFromArray = function(arr, ...reset) {
        return arr.filter(a => !reset.includes(a))
};

// Do not edit below this line
module.exports = removeFromArray;
