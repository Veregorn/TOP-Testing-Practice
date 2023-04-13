// A function that takes a string and a shift factor and returns it 
// with each character “shifted”
function caesarCipher(str,shift) {
    
    let newStr = '';

    // For length > 0 strings
    for (let i = 0; i < str.length; i += 1) {
        
        // Only letters are shifted
        if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) { // Upper Case
            // If char = Z, wrapp it into A
            if ((str.charCodeAt(i) + shift) > 90) {
                newStr += String.fromCharCode(str.charCodeAt(i) + shift - 26);
            } else {
                newStr += String.fromCharCode(str.charCodeAt(i) + shift);
            }
        } else if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) { // Lower Case
            // If char = z, wrapp it into a
            if ((str.charCodeAt(i) + shift) > 122) {
                newStr += String.fromCharCode(str.charCodeAt(i) + shift - 26);
            } else {
                newStr += String.fromCharCode(str.charCodeAt(i) + shift);
            }
        } else { // No letter case
            newStr += str[i];
        }

    }

    return newStr;

}
export default caesarCipher;