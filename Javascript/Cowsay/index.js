const information = require('./information.js')
const cowsay = require('cowsay')

console.log(cowsay.think({
    text: information.display(),
    e: 'oO',
    T: 'U ',
}))