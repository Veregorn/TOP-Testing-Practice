// A function that takes a string and returns it with the first character capitalized
function capitalize(str) {

    // Normal case
    if (str.charCodeAt(0) > 96 && str.charCodeAt(0) < 123) { // It's a letter between a and z
        return String.fromCharCode(str.charCodeAt(0) - 32) + str.slice(1);
    }

    // First character is a space
    if (str.charAt(0) === ' ') {
        return capitalize(str.slice(1));
    }

    // Other thing case (includes empty string)
    return str;

}
export default capitalize;