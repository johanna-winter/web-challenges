import { add, subtract, multiply, divide } from ".";

// add testing
test("Returns 5 if called with add(2, 3)", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});
test("Returns negative value if greater argument is negative", () => {
  const result = add(6, -9);
  expect(result).toBeLessThan(0);
});
test("Returns value close to 0.3 if called with add(0.1, 0.2)", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

// subtract testing
test("Return 10 if called with subtract(15, 5)", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});
test("Returns negative value if second argument is greater than the first one", () => {
  const result = subtract(10, 20);
  expect(result).toBeLessThan(0);
});

// multiply testing
test("Returns 8 if called with multiply(2, 4)", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});
test("Returns negative value if only first argument is negative", () => {
  const result = multiply(-2, 5);
  expect(result).toBeLessThan(0);
});
test("Returns negative value if only second argument is negative", () => {
  const result = multiply(2, -5);
  expect(result).toBeLessThan(0);
});
test("Returns positive value if called with two negative arguments", () => {
  const result = multiply(-3, -4);
  expect(result).toBeGreaterThan(0);
});

// divide testing
test("Returns 3 if called with divide(9, 3)", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});
test("Returns 'You should not do this!' if called with 0 as second argument", () => {
  const result = divide(3, 0);
  expect(result).toBe("You should not do this!");
});
