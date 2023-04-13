import caesarCipher from "./caesar-cipher";

// Test number 18
test('Cipher and empty string', () => {
    expect(caesarCipher('',1)).toBe('');
});

// Test number 19
test('Cipher a one char string', () => {
    expect(caesarCipher('a',1)).toBe('b');
});

// Test number 20
test('Cipher a string without spaces, z or Zs', () => {
    expect(caesarCipher('daniel',2)).toBe('fcpkgn');
});

// Test number 21
test('Cipher a multiword string', () => {
    expect(caesarCipher('daniel y lola',1)).toBe('ebojfm z mpmb');
});

// Test number 22
test('Cipher keeping the same case', () => {
    expect(caesarCipher('Daniel y Lola',1)).toBe('Ebojfm z Mpmb');
});

// Test number 23
test('Cipher wrapping from z to a', () => {
    expect(caesarCipher('Zaragoza',3)).toBe('Cdudjrcd');
});

// Test number 24
test('Final cipher test', () => {
    expect(caesarCipher('En un lugar, de la Mancha, 2 alegres aventureros de Zaragoza...',2)).toBe('Gp wp nwict, fg nc Ocpejc, 2 cngitgu cxgpvwtgtqu fg Bctciqbc...');
});