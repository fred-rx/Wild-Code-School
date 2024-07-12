const instructors = [
    {
        name: 'John',
        availability: 'all',
        specialities: ['Javascript', 'Python', 'C++']
    },
    {
        name: 'Mary',
        availability: 'weekend',
        specialities: ['Javascript', 'Ruby', 'C++']
    },
    {
        name: 'Chris',
        availability: 'evenings',
        specialities: ['Javascript']
    },
    {
        name: 'Anthony',
        availability: 'all',
        specialities: ['Python', 'Ruby']
    },
    {
        name: 'Pauline',
        availability: 'only Mondays',
        specialities: ['Javascript', 'Html', 'CSS']
    },
    {
        name: 'Mark',
        availability: 'all',
        specialities: ['C#', 'C++', 'Javascript']
    },
    {
        name: 'Helen',
        availability: 'evenings',
        specialities: ['Python', 'C++']
    },
    {
        name: 'Charles',
        availability: 'none',
        specialities: ['Python']
    }
];

const disponibilities = instructors.filter(person => person.availability == 'all' || person.availability == 'weekend')
const specialities = disponibilities.filter(person => person.specialities.includes('Javascript'))

specialities.forEach(person => {
    if (person.specialities.includes('Python')) {
        console.log(`Hi ${person.name}, we inform you that this weekend you will be doing the support class and you need to prepare a Python workshop`)
    } else {
        console.log(`Hi ${person.name}, we inform you that this weekend you will be doing the support class`)
    }
})