import { ReactNode } from "react"

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import RestoreIcon from '@mui/icons-material/Restore';

import Login from "../../platform/authentication/login"
import Register from "../../platform/authentication/register"
import Dashboard from "../../platform/dashboard/dashboard"
import WebsiteHomepage from "../../website/homepage"
import Search from "../../platform/dashboard/search"
import Profile from "../../platform/dashboard/profile"
import SearchHistory from "../../platform/dashboard/search-history";

export interface IRoutes {
    name: string,
    key: string,
    route: string,
    icon: null | ReactNode,
    component: any,
    sideNav: boolean
}

export const routes = [{
    name: "Website",
    key: "website",
    route: "/",
    icon: null,
    component: <WebsiteHomepage />,
    sideNav: false
}, {
    name: "Login",
    key: "login",
    route: "/login",
    icon: null,
    component: <Login />,
    sideNav: false
}, {
    name: "Register",
    key: "register",
    route: "/register",
    icon: null,
    component: <Register />,
    sideNav: false
}, {
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <DashboardIcon />,
    component: <Dashboard />,
    sideNav: true
}, {
    name: "Search",
    key: "search",
    route: "/search",
    icon: <PersonSearchIcon />,
    component: <Search />,
    sideNav: true
}, {
    name: "Search History",
    key: "search-history",
    route: "/search-history",
    icon: <RestoreIcon />,
    component: <SearchHistory />,
    sideNav: true
}, {
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: null,
    component: <Profile />,
    sideNav: false
}
]