import reverseString from "./reverse";


test('empty string', () => {
    expect(reverseString('')).toBe('');
});

test('one char string', () => {
    expect(reverseString('a')).toBe('a');
});

test('one word string', () => {
    expect(reverseString('lola')).toBe('alol');
});

test('multi word string', () => {
    expect(reverseString('lola y dani')).toBe('inad y alol');
});