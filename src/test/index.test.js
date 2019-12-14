import convertTry from '../index.js';

test('Введено десятичные числа - 11', () => {
  const expected = 11;
  const received = convertTry('11');
  expect(received).toBe(expected);
});

test('Введены не числа - 0B11', () => {
  const expected = 'error';
  const received = convertTry('0B11');
  expect(received).toBe(expected);
});

test('Введены не числа - 0Xb', () => {
  const expected = 'error';
  const received = convertTry('0Xb');
  expect(received).toBe(expected);
});

test('Введены не числа - 1/1', () => {
  const expected = 'error';
  const received = convertTry('1/1');
  expect(received).toBe(expected);
});

test('Введены не числа 1+1', () => {
  const expected = 'error';
  const received = convertTry('1+1');
  expect(received).toBe(expected);
});

test('Введены не числа - 1dfsf4564654', () => {
  const expected = 'error';
  const received = convertTry('1dfsf4564654');
  expect(received).toBe(expected);
});
