import convertTry from './index.js';

test('Введено число', () => {
  const expected = 11;
  const received = convertTry('11');
  expect(received).toBe(expected);
});

test('Обрабатывается ошибка', () => {
  const expected = 'error';
  const received = convertTry('1a');
  expect(received).toBe(expected);
});
