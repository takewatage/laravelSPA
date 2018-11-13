export default () => [
    { path: "/", name: "welcome", component: require("../pages/Welcome.vue") },

    {
        path: "/login",
        name: "login",
        component: require("../pages/Login.vue")
    }
];
