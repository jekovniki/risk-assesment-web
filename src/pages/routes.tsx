import { ReactNode } from "react"

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import RestoreIcon from '@mui/icons-material/Restore';

import Login from "../features/platform/authentication/login"
import Register from "../features/platform/authentication/register"
import Dashboard from "./platform/dashboard";
import WebsiteHomepage from "./website/homepage";
import SearchResult from "./platform/search-result";
import Profile from "./platform/profile";
import SearchHistory from "./platform/search-history";
import NewSearch from "./platform/new-search";

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
},{
    name: "New Search",
    key: "search",
    route: "/search",
    icon: <PersonSearchIcon />,
    component: <NewSearch />,
    sideNav: true
},{
    name: "Search Result",
    key: "search-result",
    route: "/search-result",
    icon: <PersonSearchIcon />,
    component: <SearchResult />,
    sideNav: false
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