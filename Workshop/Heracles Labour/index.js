// First Labour : Heracles vs Nemean Lion
// use your Figher class here

const fighterFile = require('./src/Fighter.js')

const heracles = new fighterFile.Fighter('🧔 Heracles', 20, 6, fighterFile.maxLife)
const nemeanLion = new fighterFile.Fighter('🦁 Nemean Lion', 11, 13, fighterFile.maxLife)

console.log(`${heracles.name} - ${heracles.life}`)
console.log(`${nemeanLion.name} - ${nemeanLion.life}`)

let round = 1

do {
    console.log(`🕛 Round #${round}`)
    heracles.fight(nemeanLion)
    console.log(`${heracles.name} 🗡️ ${nemeanLion.name} 💙 ${nemeanLion.name} : ${nemeanLion.life}`)
    nemeanLion.fight(heracles)
    console.log(`${nemeanLion.name} 🗡️ ${heracles.name} 💙 ${heracles.name} : ${heracles.life}`)
    ++round
} while (heracles.life > 0 && nemeanLion.life > 0);

if (heracles.life > 0 && nemeanLion.life === 0) {
    console.log(`🏆 ${heracles.name} wins (💙 ${heracles.life})`)
    console.log(`💀 ${nemeanLion.name} is dead`)
} else {
    console.log(`🏆 ${nemeanLion.name} wins (💙 ${nemeanLion.life})`)
    console.log(`💀 ${heracles.name} is dead`)
}