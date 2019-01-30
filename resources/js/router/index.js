import Vue from 'vue'
import routes from './routes'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from '~/store'
import { action, getter } from '~/store/types'


Vue.use(Router)

const router = make(
    routes({ authGuard, guestGuard })
)

sync(store, router)

export default router


function make (routes) {
    const router = new Router({
        routes,
        mode: 'history'
    })

     // Register before guard.
    router.beforeEach(async (to, from, next) => {

        if (store.getters[getter.AUTH_CHECK] && !store.getters[getter.AUTH_USER].id) {
            await store.dispatch(action.AUTH_FETCH_USER)
        }

        await setLayout(router, to)
        next()
    })

    // Register after hook.
    router.afterEach((to, from) => {
        router.app.$nextTick(() => {
            router.app.$loading.finish()
        })
    })

    return router
}

async function setLayout (router, to) {
    // Get the first matched component.
    const components = await resolveComponents(router.getMatchedComponents({ ...to }))

    if (components.length === 0) {
        return
    }

    await router.app.$nextTick()

    // Start the page loading bar.
    if (components[0].loading !== false) {
        router.app.$loading.start()
    }

    // Set application layout.
    router.app.setLayout(components[0].layout || '')

}

/**
 * Redirect to login if guest.
 *
 * @param  {Array} routes
 * @return {Array}
 */
function authGuard (routes) {
    return beforeEnter(routes, (to, from, next) => {
        if (!store.getters[getter.AUTH_CHECK]) {
            next({name: 'welcome'})
        } else {
            next()
        }
    })
}

/**
 * Redirect home if authenticated.
 *
 * @param  {Array} routes
 * @return {Array}
 */
function guestGuard (routes) {
    return beforeEnter(routes, (to, from, next) => {
        if (store.getters[getter.AUTH_CHECK]) {
            next({name: 'top'})
        } else {
            next()
        }
    })
}

/**
 * Apply beforeEnter guard to the routes.
 *
 * @param  {Array} routes
 * @param  {Function} beforeEnter
 * @return {Array}
 */
function beforeEnter (routes, beforeEnter) {
    return routes.map(route => {
        return { ...route, beforeEnter }
    })
}


async function resolveComponents(components) {
    return await Promise.all(
        components.map(async component => {
            return typeof component === 'function' ? await component() : component
        })
    )
}
