/* Fighter class definition */

const maxLife = 100

class Fighter {

    constructor(name, strength, dexterity, life) {
        this.name = name
        this.strength = strength
        this.dexterity = dexterity
        this.life = life
    }

    fight(defender) {
        let dommage = Math.floor(Math.random() * this.strength) - defender.dexterity
        let pointLife = defender.life
        if (dommage < 0) {
            dommage = 0
        }
        pointLife = pointLife - dommage
        if (pointLife < 0) {
            pointLife = 0
        }
        defender.life = pointLife
    }

}

module.exports = {
    maxLife,
    Fighter
}