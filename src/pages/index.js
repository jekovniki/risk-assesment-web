import Homepage from "./homepage";
import Dashboard from "./dashboard";
import SignIn from "./sign-in";

import PrivateLayout from "../layouts/PrivateLayout";

/* ICONS */
import DashboardIcon from "@mui/icons-material/DashboardOutlined";

const routes = [
  {
    type: "collapse",
    name: "Homepage",
    key: "homepage",
    route: "/",
    icon: <DashboardIcon size="12px" />,
    component: <Homepage />,
    sideNav: false,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <DashboardIcon size="12px" />,
    component: <PrivateLayout><Dashboard /></PrivateLayout>,
    sideNav: true,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Search result",
    key: "search",
    route: "/search",
    icon: <DashboardIcon size="12px" />,
    component: <PrivateLayout><Dashboard /></PrivateLayout>,
    sideNav: true,
    noCollapse: true,
  },
//   {
//     type: "collapse",
//     name: "Profile",
//     key: "profile",
//     route: "/profile",
//     icon: <ProfileIcon size="12px" />,
//     component: <PrivateLayout><Profile /></PrivateLayout>,
//     sideNav: false,
//     noCollapse: true,
//   },
//   {
//     type: "collapse",
//     name: "Company structure",
//     key: "structure",
//     route: "/company-structure",
//     icon: <ProfileIcon size="12px" />,
//     component: <PrivateLayout><OrganizationalStructure /></PrivateLayout>,
//     sideNav: true,
//     noCollapse: true,
//   },
  { type: "title", title: "Administrator Pages", key: "account-pages", sideNav: false, isModerator: true },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/sign-in",
    icon: <DashboardIcon size="12px" />,
    component: <SignIn />,
    sideNav: false,
    noCollapse: true,
  },
//   {
//     type: "collapse",
//     name: "Not found",
//     key: "not-found",
//     route: "/404",
//     icon: <DashboardIcon size="12px" />,
//     component: <NotFound />,
//     sideNav: false,
//     noCollapse: true,
//   },
];

export default routes;
