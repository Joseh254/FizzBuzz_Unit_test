
const fizz = require('../index');

it('returns "fizz" when the number is divisible by 3', () => {
  expect(fizz(3)).toBe('fizz');
  expect(fizz(9)).toBe('fizz');
});

it('returns "buzz" when the number is divisible by 5', () => {
  expect(fizz(5)).toBe('buzz');
  expect(fizz(10)).toBe('buzz');
});

it('returns "fizzBuzz" when the number is divisible by both 3 and 5', () => {
  expect(fizz(15)).toBe('fizzBuzz');
  expect(fizz(30)).toBe('fizzBuzz');
});

it('returns the number when it is not divisible by 3 or 5', () => {
  expect(fizz(1)).toBe(1);
  expect(fizz(7)).toBe(7);
});
