const skills = [
    { id: 125223, skill: 'FrontEnd', has: true },
    { id: 127904, skill: 'BackEnd', has: false },
    { id: 139608, skill: 'Fullstack', has: false }
]

function update(id, updatedSkill) {
    id = parseInt(id)
    const skill = skills.find(skill => skill.id === id)
    Object.assign(skill, updatedSkill)
}

function deleteOne(id) {
    id = parseInt(id)
    // Find the index for the todo
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}

function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000
    skill.done = false
    skills.push(skill)
}


function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}


function getAll() {
    return skills
}

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}