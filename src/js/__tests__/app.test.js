import Character from '../app';

test('name', () => {
  expect(() => {
    const recieved = new Character('V', 'Bowman');
    return recieved;
  }).toThrow();
});
test('класс Character несуществующий тип персонажа', () => {
  expect(() => {
    const recieved = new Character('Vova', 'frontend');
    return recieved;
  }).toThrow();
});
