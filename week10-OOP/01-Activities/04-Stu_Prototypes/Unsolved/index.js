// TODO: Add a comment describing what kind of function this is
// Answer: A Constructor

function Character(name, type, age, strength, hitpoints) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
// Answer: It makes another method to the constructor

Character.prototype.printStats = function () {
  console.log(
    `Name: ${this.name}\nProfession: ${this.type}\nAge: ${this.age}\nStrength: ${this.strength}\nHitPoints: ${this.hitpoints}`
  );
  console.log('\n-------------\n');
};

// TODO: Add a comment describing the functionality of this method
// Answer: If player has hit points left, they are still alive and it tells you.
Character.prototype.isAlive = function () {
  if (this.hitpoints > 0) {
    console.log(`${this.name} is still alive!`);
    console.log('\n-------------\n');
    return true;
  }
  console.log(`${this.name} has died!`);
  return false;
};

// TODO: Add a comment describing the functionality of this method
// Answer: Your attack is your hitpoints minus strength.
Character.prototype.attack = function (character2) {
  character2.hitpoints -= this.strength;
};

// TODO: Add a comment describing the functionality of this method
// Answer: When method is ran, it increases the age and strength and hitpoints of the character.
Character.prototype.levelUp = function () {
  this.age += 1;
  this.strength += 5;
  this.hitpoints += 25;
};

const warrior = new Character('Crusher', 'Warrior', 25, 10, 75);
const rogue = new Character('Dodger', 'Rogue', 23, 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);

// TODO: Add a comment describing what you expect to see printed in the console
// Answer: See above with only the warrior
warrior.printStats();

// TODO: Add a comment describing what you expect to see printed in the console
// Answer: See above with only the warrior.
warrior.isAlive();

rogue.levelUp();

// TODO: Add a comment describing what you expect to see printed in the console
// Answer: See above with the rogue.
rogue.printStats();
