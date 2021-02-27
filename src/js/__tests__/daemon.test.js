import Daemon from '../daemon';

test('new unit', () => {
  const received = new Daemon('Vova', 'Daemon');
  const expected = {
    name: 'Vova',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});
