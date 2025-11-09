const fibonacci = function(n) {
    if(n >= 0){
        return n <= 1 ? parseInt(n) : parseInt(fibonacci(n - 1) + fibonacci(n - 2));
    } else {
        return "OOPS"
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
