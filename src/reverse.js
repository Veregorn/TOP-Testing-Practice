// A function that takes a string and returns it reversed
function reverseString(str) {

    // More than one char
    if (str.length > 1) {
        let newStr = '';
        let i = 1;
        while (i <= str.length) {
            newStr += str.substring(str.length - i, str.length - (i - 1));
            i += 1;
        }
        return newStr;
    }

    // Base Case (0 or 1 length string)
    return str;

}
export default reverseString;