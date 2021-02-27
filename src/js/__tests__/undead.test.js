import Undead from '../undead';

test('new unit', () => {
    const received = new Undead('Vova', 'Undead');
    const expected = {
      name: 'Vova',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };
    expect(received).toEqual(expected);
  });