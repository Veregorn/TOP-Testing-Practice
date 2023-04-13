import analyzeArray from "./analyze-array";

// Test number 25
test('Analyze an empty array', () => {
    expect(analyzeArray([])).toEqual({average: 0, min: 0, max: 0, length: 0});
});

// Test number 26
test('Updates length, average, max and min object properties', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6});
});

// Test number 27
test('Updates length, average, max and min object properties', () => {
    expect(analyzeArray([1])).toEqual({average: 1, min: 1, max: 1, length: 1});
});