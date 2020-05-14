const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toEqual(3)
})

test('Adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0)
    } 
  } 
})

test('Object assignment', () => {
  const data = { one: 1}
  data['two'] = 2
  expect(data).toEqual({ one:1, two: 2})
})

test('Two plus two', () => {
  const value = 2 + 2
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(3.5)
  expect(value).toBeLessThan(5)
  expect(value).toBeLessThanOrEqual(4.5)
  expect(value).toBe(4)
  expect(value).toEqual(4)
})

test('Adding floating point', () => {
  const value = 0.1 + 0.2
  expect(value).toBeCloseTo(0.3)
})