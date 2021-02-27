import Zombie from '../zombie';

test('new unit', () => {
  const received = new Zombie('Vova', 'Zombie');
  const expected = {
    name: 'Vova',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});
