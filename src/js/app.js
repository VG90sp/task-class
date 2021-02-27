export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    const unitsType = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];
    if (name.length < 2 || name.length > 10 ) {
      throw new Error("Ошибка!Длина имени должна быть минимум 2 символа и максимум 10 символов")
    }
    if (!unitsType.includes(type)) {
      throw new Error("Ошибка!Неправильный тип персонажа")
    }
  }

}