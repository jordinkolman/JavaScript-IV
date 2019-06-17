/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

  */

  class GameObject{
    constructor(attributes) {
      this.name = attributes.name
      this.createdAt = attributes.createdAt
      this.dimensions = attributes.dimensions
  }
  destroy() {
      return (`${this.name} was removed from the game.`)
  }
}

  class CharacterStats extends GameObject{
      constructor(attributes) {
        super(attributes)
        this.healthPoints = attributes.healthPoints
      }
      takeDamage() {
          return (`${this.name} took damage.`)
      }
  }

  class Humanoid extends CharacterStats{
      constructor(attributes) {
          super(attributes)
          this.team = attributes.team
          this.weapons = attributes.weapons
          this.language = attributes.language
      }
      greet () {
          return (`${this.name} offers a greeting in ${this.language}.`)
      }
  }

  class Hero extends Humanoid{
      constructor(attributes){
          super(attributes)
          this.side = attributes.side
      }
      battleCry() {
          return (`I am ${this.name}, and I fight for the ${this.side}!`)
      }
  }

  class Villain extends Humanoid{
      constructor(attributes){
          super(attributes)
          this.side = attributes.side
      }
      battleCry() {
          return (`I am ${this.name}, and I fight for the ${this.side}!`)
      }
  }
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1
    },
    healthPoints: 5,
    name: "Bruce",
    team: "Mage Guild",
    weapons: ["Staff of Shamalama"],
    language: "Common Tongue"
  });
  
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2
    },
    healthPoints: 15,
    name: "Sir Mustachio",
    team: "The Round Table",
    weapons: ["Giant Sword", "Shield"],
    language: "Common Tongue"
  });
  
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4
    },
    healthPoints: 10,
    name: "Lilith",
    team: "Forest Kingdom",
    weapons: ["Bow", "Dagger"],
    language: "Elvish"
  });
  
  const mainCharacter = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 4,
      height: 6
    },
    healthPoints: 100,
    name: 'Ser Bartholomew the Brave',
    team: 'White Knights',
    weapons: ['Sword', 'Spear', 'Shield', 'Bow'],
    language: 'Common Tongue',
    side: 'Good of the People'
  })
  
  const mainAntogonist = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 4,
      width: 6,
      height: 10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    },
    healthPoints: 200,
    name: 'Draxon',
    team: 'Black Storm',
    weapons: ['Magic', 'Fire', 'Staff', 'Snakes'],
    language: 'Common Tongue',
    side: 'Evil King Magdorn'
  })
  
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  console.log(mainCharacter.battleCry())
  console.log(mainAntogonist.battleCry())