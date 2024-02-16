import Login from "../../platform/authentication/login"
import Register from "../../platform/authentication/register"
import WebsiteHomepage from "../../website/homepage"

export interface IRoutes {
    name: string,
    key: string,
    route: string,
    component: any,
    sideNav: boolean
}

export const routes = [{
    name: "Website",
    key: "website",
    route: "/",
    component: <WebsiteHomepage />,
    sideNav: false
}, {
    name: "Login",
    key: "login",
    route: "/login",
    component: <Login />,
    sideNav: false
}, {
    name: "Register",
    key: "register",
    route: "/register",
    component: <Register />,
    sideNav: false
}, {
    name: "Homepage",
    key: "home",
    route: "/home",
    component: <>Homepage</>,
    sideNav: true
}, {
    name: "Profile",
    key: "profile",
    route: "/profile",
    component: <>Profile</>,
    sideNav: true
}
]