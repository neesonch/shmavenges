const splitInto = require('./array-splitter.js');

const INPUT_ARRAY = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto (It's still a planet to me, dammit)"];
const EMPTY_INPUT_ARRAY = [];

test('#splitArray into negative arrays', () => {
  expect(splitInto(INPUT_ARRAY, -1)).toMatchSnapshot();
});

test('#splitArray into 0 arrays', () => {
  expect(splitInto(INPUT_ARRAY, 0)).toMatchSnapshot();
});

test('#splitArray into 1 array', () => {
  expect(splitInto(INPUT_ARRAY, 1)).toMatchSnapshot();
});

test('#splitArray into multiple arrays', () => {
  expect(splitInto(INPUT_ARRAY, 4)).toMatchSnapshot();
});

test('#splitArray into more arrays than original items', () => {
  expect(splitInto(INPUT_ARRAY, 10)).toMatchSnapshot();
});

test('#splitArray when given empty array', () => {
  expect(splitInto(EMPTY_INPUT_ARRAY, 2)).toMatchSnapshot();
});