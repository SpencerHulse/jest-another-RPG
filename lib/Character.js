class Character {
  isAlive = function () {
    if (this.health === 0) {
      return false;
    } else {
      return true;
    }
  };

  getHealth = function () {
    return `${this.name}'s health is now ${this.health}!`;
  };

  getAttackValue = function () {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
  };

  reduceHealth = function (health) {
    this.health -= health;

    if (this.health < 0) {
      this.health = 0;
    }
  };
}
module.exports = Character;
