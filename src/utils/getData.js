const API = 'https://rickandmortyapi.com/api/character/'
let array = []

function getNumberOfCharacters(number) {
    for (let index = 0; index < number; index++) {
        array.push(index + 1)
    }
    return `${API}[${array}]`
}
const APIWithMoreCharacters = getNumberOfCharacters(30)

const getData = async(id) => {
    const apiUrl = id ? `${API}${id}` : APIWithMoreCharacters
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        return data
    } catch (err) {
        console.error('Fetch Error', err)
    }
}

export {getData}