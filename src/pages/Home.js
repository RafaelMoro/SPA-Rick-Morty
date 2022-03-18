import { getData } from "../utils/getData"

const Home = async() => {
    const characters = await getData()
    const view = `
    <div class="characters">
        ${characters.map(character => `
        <article class="character">
            <a class="character__anchor" href="#/${character.id}/">
                <img class="character__image" src="${character.image}" alt="${character.name}">
                <h2 class="character__title">${character.name}</h2>
                <span class="character__status">${character.status}</span>
            </a>
        </article>
        `).join('')}
    </div>
    `
    return view
}
export {Home}