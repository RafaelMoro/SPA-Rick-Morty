import {Header} from '../templates/Header'
import {Character} from '../pages/Character'
import { Error404 } from '../pages/Error4040'
import { Home } from '../pages/Home'

const routes = {
    '/': Home,
    '/:id': Character
}

const router = async() => {
    const header = null || document.querySelector('.header')
    const content = null || document.querySelector('.main')

    header.innerHTML = await Header()
}
export {router}