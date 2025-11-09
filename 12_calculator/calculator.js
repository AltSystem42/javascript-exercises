const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	const newArr = arr.reduce((total, number)=>{
    
    return total + number;
  }, 0)
  return newArr;
};

const multiply = function(arr) {
  const newArr = arr.reduce((total, number) => {
    return total * number
  }, 1) 
  return newArr;
};

const power = function(a, b) {
  let c = 1
  for(let i = 0; i < b; i++){
    c *= a
  }
	return c
};

const factorial = function(a) {
  if(a === 0){
    return 1} else {
  let c = a * factorial((a - 1))
  return c}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
