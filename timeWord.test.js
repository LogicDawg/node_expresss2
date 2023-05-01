const { timeToWords } = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeToWords).toBe('function');
  });
});

test("midnight", function () {
  const time = timeToWords('00:00');
  expect(timeToWords(time)).toEqual('midnight');
});

test("1 o'clock am", function () {
  const time = timeToWords('01:00');
  expect(timeToWords(time)).toEqual("one o'clock am");
});


test("three fifteen am", function () {
  const time = timeToWords('3:15');
  expect(timeToWords(time)).toEqual("three fifteen am");
});