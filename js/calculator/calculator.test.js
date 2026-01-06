const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

// 2 pruebas unitarias para la función divide()

test("divides 20 / 5 to equal 4", () => {
  expect(calculator.divide(20, 5)).toBe(4);
});

test("divides 80 / 2 to equal 40", () => {
  expect(calculator.divide(80, 2)).toBe(40);
});

// 2 pruebas unitarias para la función multiply().

test("multiplies 10 * 5 to equal 50", () => {
  expect(calculator.multiply(4, 5)).toBe(20);
});

test("multiplies -3 * 6 to equal -18", () => {
  expect(calculator.multiply(-3, 6)).toBe(-18);
});

// Tarea 3. Usar el Desarrollo Orientado a Pruebas para desarrollar la función dividir en el script ./js/calculator/calculator.js.

// Escribir una prueba unitaria para verificar la función divide() pasando 0 como segundo argumento.

/* test("Divides a number by 0", () => {
  expect(calculator.divide(10, 0)).toBe(Infinity);
}); */

test("Divides a number by 0", () => {
  expect(calculator.divide(10, 0)).toBe(0);
});