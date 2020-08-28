import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/user",
        name: "User",
        component: () => import("../pages/User.vue")
    }
];

if (process.env.MODE !== "ssr") {
    routes.push({
        path: "*",
        component: () => import("../pages/Error404.vue")
    });
}

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
