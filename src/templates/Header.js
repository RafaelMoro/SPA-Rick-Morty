import logo from '@images/logo.png'

const Header = () => {
    const view = `
    <header class="header">
        <h1>
            <a href="#">
                <img class="logo" src=${logo} alt="Rick and Morty logo">
            </a>
        </h1>
    </header>
    `
    return view
}
export {Header}