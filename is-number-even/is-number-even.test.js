const isNumberEven = require('./is-number-even.js');

test('Even integer', () => {
  expect(isNumberEven(22)).toMatchSnapshot();
});

test('Uneven integer', () => {
  expect(isNumberEven(11)).toMatchSnapshot();
});

test('Even float', () => {
  expect(isNumberEven(10.4)).toMatchSnapshot();
});

test('Uneven float', () => {
  expect(isNumberEven(3.5)).toMatchSnapshot();
});
