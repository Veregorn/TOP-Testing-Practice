import calculator from "./calculator";

test('sum of two positive numbers', () => {
    expect(calculator.add(3,4)).toBe(7);
});

test('sum of one positive number and a negative one', () => {
    expect(calculator.add(3,-4)).toBe(-1);
});

test('subtract of two positive numbers', () => {
    expect(calculator.subtract(3,4)).toBe(-1);
});

test('subtract of one positive number and a negative one', () => {
    expect(calculator.subtract(3,-4)).toBe(7);
});

test('normal division', () => {
    expect(calculator.divide(9,3)).toBe(3);
});

test('division by 0 control', () => {
    expect(() => calculator.divide(9,0)).toThrow('You cannot divide by 0');
});

test('division by 0 control (float point numbers)', () => {
    expect(() => calculator.divide(9.0,0.0)).toThrow('You cannot divide by 0');
});

test('real numbers multiply', () => {
    expect(calculator.multiply(4.2,2.0)).toBe(8.4);
});