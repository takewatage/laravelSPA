import Vue from 'vue'
import routes from './routes'
import Router from 'vue-router'
// import { sync } from 'vuex-router-sync'

Vue.use(Router)

const router = make(
    routes()
)

// sync(router)

export default router


function make (routes) {
    const router = new Router({
        routes,
        mode: 'history'
    })

    return router
}
