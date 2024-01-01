import Homepage from "./homepage";
import Dashboard from "./dashboard";
import SignIn from "./sign-in";

import PrivateLayout from "../layouts/PrivateLayout";

/* ICONS */
import DashboardIcon from "@mui/icons-material/DashboardOutlined";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SpeedIcon from '@mui/icons-material/Speed';
import RestoreIcon from '@mui/icons-material/Restore';
import SignUp from "./sign-up";
import History from "./history";

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
    icon: <SpeedIcon size="12px" />,
    component: <PrivateLayout><Dashboard /></PrivateLayout>,
    sideNav: true,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "New search",
    key: "search",
    route: "/search",
    icon: <PersonSearchIcon size="12px" />,
    component: <PrivateLayout><Dashboard /></PrivateLayout>,
    sideNav: true,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Search History",
    key: "history",
    route: "/history",
    icon: <RestoreIcon size="12px" />,
    component: <PrivateLayout><History /></PrivateLayout>,
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
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/sign-up",
    icon: <DashboardIcon size="12px" />,
    component: <SignUp />,
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
