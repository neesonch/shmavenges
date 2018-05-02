const isNumberEven = require('./is-number-even.js');

test('Even integer', () => {
  expect(isNumberEven(22)).toMatchSnapshot();
});
