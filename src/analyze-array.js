// A function that takes an array of numbers and returns an object 
// with the following properties: average, min, max, and length
function average(arr) {
    
    let sum = 0;

    if (arr.length === 0) {
        return sum;
    }

    for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i];
    }

    return sum / arr.length;

}

function min(arr) {
    
    let min = 0;

    if (arr.length === 0) {
        return min;
    }

    min = arr[0];

    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;

}

function max(arr) {
    
    let max = 0;

    if (arr.length === 0) {
        return max;
    }

    max = arr[0];

    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;

}

function analyzeArray(arr) {
    
    // Declare object with those 4 properties
    let object = {
        average: 0,
        min: 0,
        max: 0,
        length: 0
    }

    // Calculate average property
    object.average = average(arr);

    // Calculate min property
    object.min = min(arr);

    // Calculate max property
    object.max = max(arr);

    // Calculate length property
    object.length = arr.length;

    return object;

}
export default analyzeArray;