import Magician from '../magician';

test('new unit', () => {
  const received = new Magician('Vova', 'Magician');
  const expected = {
    name: 'Vova',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});
