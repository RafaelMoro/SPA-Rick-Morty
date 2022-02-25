const Home = async() => {
    const view = `
    <div class="characters">
        <article class="character">
            <a href="#/character">
                <img src="image" alt="character">
                <h2>Name</h2>
            </a>
        </article>
    </div>
    `
    return view
}
export {Home}