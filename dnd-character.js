//
// This is only a SKELETON file for the 'DnD Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
import DiceRoller from 'dice-roller-dnd'

// function to calculate abilityModifier from constitution attribute
export const abilityModifier = (con) => {

  if (con < 3) {
    throw new Error('Ability scores must be at least 3')
  } else if (con > 18) {
    throw new Error('Ability scores can be at most 18')
  }
  // ability Modifier takes the constitution minus 10 divided by 2
  // this is defined in the spec
  return Math.floor((con - 10) / 2)
};

export class Character {

  constructor () {
    this._strength = Character.rollAbility()
    this._dexterity = Character.rollAbility()
    this._constitution = Character.rollAbility()
    this._intelligence = Character.rollAbility()
    this._wisdom = Character.rollAbility()
    this._charisma = Character.rollAbility()
    this._hitpoints = 10 + abilityModifier(this._constitution)
  }

  static rollAbility() {
    const min = 1
    const max = 6
    const maxRolls = 4
    const rolls = []

    /*
    //https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    for (let roll = 0; roll < maxRolls; roll++) {

      rolls.push(Math.floor(Math.random() * (max - min + 1)) + min)

    }

    // sort the rolls acending and shift out the lowest
    rolls.sort().shift()

    return rolls.reduce((accumulator, currentValue) => {return accumulator + currentValue}, 0)
    */
    let ability = new DiceRoller({n: 4, size: 6 })

    let diceRoles = ability.roll()
    console.log(diceRoles.keepHighest(3))
    return diceRoles.keepHighest(3).total

  }

  get strength() {
    return this._strength;
  }
  set strength(newVal) {
    this._strength = newVal
  }


  get dexterity() {
    return this._dexterity
  }
  set dexterity(newVal) {
    this._dexterity = newVal
  }

  get constitution() {
    return this._constitution
  }
  set constitution(newVal){
    this._constitution = newVal
  }

  get intelligence() {
    return this._intelligence
  }
  set intelligence(newVal) {
    this._intelligence = newVal
  }

  get wisdom() {
    return this._wisdom
  }
  set wisdom(newVal) {
    this._wisdom = newVal
  }

  get charisma() {
   return this._charisma
  }
  set charisma(newVal){
    this._charisma = newVal
  }

  get hitpoints() {
    return this._hitpoints
  }
  set hitpoints(newVal) {
    this._hitpoints = newVal
  }
}

