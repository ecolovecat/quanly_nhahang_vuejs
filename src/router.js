import { createRouter, createWebHistory } from "vue-router";

import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Update from "./components/Update";
import Create from "./components/Create";

const routes = [
    {name: "HomePage",path:"/",component:HomePage},
    {name: "SignUp",path:"/sign-up",component:SignUp},
    {name: "LoginPage",path:"/login",component:Login},
    {name: "Update",path:"/update/:id",component:Update},
    {name: "Create",path:"/create",component:Create},
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;