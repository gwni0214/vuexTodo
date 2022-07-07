import Vue from 'vue';
import VueRouter from "vue-router";

import homePage from "../pages/homePage.vue";
import todoInput from "../pages/todoInput.vue";
import todoList from "../pages/todoList.vue";
import todoFooter from "../pages/todoFooter.vue";
import todoHeader from "../pages/todoHeader.vue";
import todoSearch from "../pages/todoSearch.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/vuexTodo",
        name: "home",
        component: homePage
    },
    {
        path: "/",
        name: "header",
        component: todoHeader
    },
    {
        path: "/input",
        name: "input",
        component: todoInput
    },
    {
        path: "/list",
        name: "list",
        component: todoList
    },
    {
        path: "/footer",
        name: "footer",
        component: todoFooter
    },
    {
        path: "/search",
        name: "search",
        component: todoSearch
    },
]

const router = new VueRouter({
    routes,
    mode: "history"
});

export default router;