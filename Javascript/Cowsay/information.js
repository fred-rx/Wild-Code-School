const studentName = 'Frédérique Pignol'
const campus = 'Clermont-Ferrand'

function displatStudent() {
    return `< Hello I'm ${studentName} from ${campus} Campus! >`
}

module.exports = {
    name: studentName,
    campus: campus,
    display: displatStudent,
}