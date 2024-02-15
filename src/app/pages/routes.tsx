
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
    component: <>Website</>,
    sideNav: false
}, {
    name: "Auth",
    key: "auth",
    route: "/auth",
    component: <>Sign In</>,
    sideNav: true
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