import Swordsman from '../swordsman';

test('new unit', () => {
  const received = new Swordsman('Vova', 'Swordsman');
  const expected = {
    name: 'Vova',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});
