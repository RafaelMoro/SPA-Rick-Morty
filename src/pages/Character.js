import { getHash } from "../utils/getHash"
import { getData } from "../utils/getData"

const Character = async() => {
    const id = getHash()
    const character = await getData(id)
    const view = `
    <article class="character-card">
        <div class="character-card__image">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
        </div>
        <div class="character-card__description">
            <p><span>Episodes:</span>  ${character.episode.length} </p>
            <p><span>Status:</span>  ${character.status} </p>
            <p><span>Species:</span>  ${character.species} </p>
            <p><span>Gender:</span>  ${character.gender} </p>
            <p><span>Origin:</span>  ${character.origin.name} </p>
            <p><span>Last location:</span>  ${character.location.name} </p>
        </div>
    </article>
    `
    return view
}
export {Character}