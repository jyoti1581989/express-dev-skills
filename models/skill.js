const skills = [
    { id: 125223, skill: 'FrontEnd', has: true },
    { id: 127904, skill: 'BackEnd', has: false },
    { id: 139608, skill: 'Fullstack', has: false }
]


function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}


function getAll() {
    return skills
}

module.exports = {
    getAll,
    getOne
}