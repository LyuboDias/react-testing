import { capitalize } from '../string';


//  in helpers we import the file that we want to test , create __tests__ folder and name of the file with .test.js extension


test('it should return null for null', () => {
  expect(capitalize(null)).toBe(null);
});

test('capitalize should handle empty string', () => {
  expect(capitalize("")).toBe("");
});

test('capitalize should handle one letter a', () => {
  expect(capitalize("a")).toBe("A");
});

test('capitalize should handle one letter A', () => {
  expect(capitalize("A")).toBe("A");
});

test('capitalize should handle word like boris', () => {
  expect(capitalize("boris")).toBe("Boris");
});

test('capitalize should handle word like Boris', () => {
  expect(capitalize("Boris")).toBe("Boris");
});

test('capitalize should handle word like BORIS', () => {
  expect(capitalize("BORIS")).toBe("Boris");
});

test('capitalize should handle word like bOrIs', () => {
  expect(capitalize("bOrIs")).toBe("Boris");
});

//  Jest matchers

// toBe / toEqual toBeGreaterThan toMatch toContain


