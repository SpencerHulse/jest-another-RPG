const Character = require("./Character");
const Potion = require("../lib/Potion");

class Enemy extends Character {
  constructor(name, weapon) {
    super(name);
    this.weapon = weapon;
    this.potion = new Potion();

    this.health = Math.floor(Math.random() * 10 + 85);
    this.strength = Math.floor(Math.random() * 5 + 5);
    this.agility = Math.floor(Math.random() * 5 + 5);
  }

  getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared! He has ${this.health} health!`;
  }
}
module.exports = Enemy;
