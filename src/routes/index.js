import {Header} from '../templates/Header'
import {Character} from '../pages/Character'
import { Error404 } from '../pages/Error4040'
import { Home } from '../pages/Home'

import { getHash } from '../utils/getHash'
import { resolveRoutes } from '../utils/resolveRoutes'

const routes = {
    '/': Home,
    '/:id': Character
}

const router = async() => {
    const header = null || document.querySelector('.header')
    const content = null || document.querySelector('.main')

    header.innerHTML = await Header()
    let hash = getHash()
    let route = await resolveRoutes(hash)
    let render = routes[route] ? routes[route] : Error404

    content.innerHTML = await render()
}
export {router}