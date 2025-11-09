const palindromes = function (string) {
    string = string.toLowerCase().replaceAll(/[^a-z0-9]/g, "");
    let array = string.split("")
    let newArray = array.slice().reverse()
    let counter = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] === newArray[i]){
            counter++}
    }
    if(counter === array.length){
        return true
    } else {
        return false
    }

};

// Do not edit below this line
module.exports = palindromes;
