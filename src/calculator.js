// An object that contains functions for the basic operations:
// add, subtract, divide, and multiply
// Each of these functions should take two numbers and return the correct calculation
const calculator = {
    add     : function(a,b) { return a + b },
    subtract: function(a,b) { return a - b },
    divide  : function(a,b) { 
        if (b === 0) {
            throw new Error('You cannot divide by 0');
        }
        return a / b;
    },
    multiply: function(a,b) { return a * b }
}
export default calculator;