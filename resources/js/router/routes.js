
export default ({ authGuard, guestGuard}) => [
    // Authenticated routes.
    ...guestGuard([
        {
            path: '/',
            name: 'welcome',
            component: require('~/pages/Welcome.vue'),
        },
    ]),

    // Guest routes.
    ...authGuard([
        {
            path: '/',
            name: 'welcome',
            component: require('~/pages/Welcome.vue'),
        },
        {
            path: '/top',
            name: 'top',
            component: require('~/pages/Top.vue'),
        },
    ]),
];
