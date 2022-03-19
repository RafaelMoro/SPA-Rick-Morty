//const API = 'https://rickandmortyapi.com/api/character/'
const API = process.env.API
let array = []

//This function push numbers to the array and it'l form part of the API URL to get that number of characters
function getNumberOfCharacters(number) {
    for (let index = 0; index < number; index++) {
        array.push(index + 1)
    }
    return `${API}[${array}]`
}
//Getting the URL to fetch 30 characters.
const APIWithMoreCharacters = getNumberOfCharacters(30)

//Function that fetch the Data from the API and get the JSON.
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