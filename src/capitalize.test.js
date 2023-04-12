import capitalize from "./capitalize";


test('empty string', () => {
    expect(capitalize('')).toBe('');
});

test('first character is a lower case letter', () => {
    expect(capitalize('veregorn')).toBe('Veregorn');
});

test('first character is another thing 1', () => {
    expect(capitalize('Daniel')).toBe('Daniel');
});

test('first character is another thing 2', () => {
    expect(capitalize('$Lola')).toBe('$Lola');
});

test('spaces are discarded', () => {
    expect(capitalize('  daniel')).toBe('Daniel');
});