import logo from '@images/logo.png'

const Header = () => {
    const view = `
    <a class="header__anchor" href="#">
        <img class="logo" src=${logo} alt="Rick and Morty logo">
    </a>
    `
    return view
}
export {Header}