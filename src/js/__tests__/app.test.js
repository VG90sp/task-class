import Character from '../app';

test('name', () => {
  const received = () => new Character('O', 'Bowman');
  const expected = 'Имя должно содержать от 2 до 10 символов';
  expect(received).toEqual(expected);
});

test('type', () => {
  const received =  new Character('Vova', 'frontend');
  const expected = 'Такого типа нет в списке';
  expect(received).toEqual(expected);
});