import { getHash } from "../utils/getHash"
import { getData } from "../utils/getData"
import 'animate.css'

const Character = async() => {
    const id = getHash()
    const character = await getData(id)
    const view = `
    <article class="character-card">
        <div class="animate__animated animate__fadeIn character-card__image">
            <img src="${character.image}" alt="${character.name}">
            <h2 class="animate__animated animate__slideInDown">${character.name}</h2>
        </div>
        <div class="animate__animated animate__fadeIn character-card__description">
            <p class="animate__animated animate__slideInDown"><span >Episodes:</span>  ${character.episode.length} </p>
            <p class="animate__animated animate__slideInDown"><span>Status:</span>  ${character.status} </p>
            <p class="animate__animated animate__slideInDown"><span>Species:</span>  ${character.species} </p>
            <p class="animate__animated animate__slideInDown"><span>Gender:</span>  ${character.gender} </p>
            <p class="animate__animated animate__slideInDown"><span>Origin:</span>  ${character.origin.name} </p>
            <p class="animate__animated animate__slideInDown"><span>Last location:</span>  ${character.location.name} </p>
        </div>
    </article>
    `
    return view
}
export {Character}