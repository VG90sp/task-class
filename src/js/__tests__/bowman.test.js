import Bowman from '../bowman';

test('new unit', () => {
    const received = new Bowman('Vova', 'Bowman');
    const expected = {
      name: 'Vova',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };
    expect(received).toEqual(expected);
  });