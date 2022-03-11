import { getData } from "../utils/getData"

const Home = async() => {
    const characters = await getData()
    const view = `
    <div class="characters">
        ${characters.results.map(character => `
        <article class="character">
            <a href="#/${character.id}/">
                <img class="character__image" src="${character.image}" alt="${character.name}">
                <h2 class="character__title">${character.name}</h2>
            </a>
        </article>
        `).join('')}
    </div>
    `
    return view
}
export {Home}