import { useEffect } from "react";
import styled from 'styled-components';
import { useLocation, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useSoftUIController, setMiniSidenav } from "../../context";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

import SoftBox from "../../components/SoftBox";
import SoftTypography from "../../components/SoftTypography";

import SidenavCollapse from "./SidenavCollapse";
import SidenavRoot from "./SidenavRoot";
import sidenavLogoLabel from "./styles/sidenav";
import Storage from "../../utils/storage";
import { LOCAL_STORAGE_KEYS } from "../../utils/constants";

function Sidenav({ color, brand, brandName, routes, ...rest }) {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, transparentSidenav } = controller;
  const location = useLocation();
  const { pathname } = location;
  const collapseName = pathname.split("/").slice(1)[0];

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    // A function that sets the mini state of the sidenav.
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
    }

    /** 
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
    window.addEventListener("resize", handleMiniSidenav);

    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, location]);

  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  const renderRoutes = routes.map(({ type, name, icon, title, noCollapse, key, route, sideNav, href, isModerator, isManager }) => {
    let returnValue;
    const userRole = Storage.get(LOCAL_STORAGE_KEYS.ROLE);
    const moderatorRole = userRole === 'hr' || userRole === 'admin';
    const managerRole = userRole === 'manager';
    if (isModerator && moderatorRole) {
      sideNav = true
    }
    if (isManager && managerRole) {
      sideNav = true
    }
    if (type === 'title' && isModerator && moderatorRole === false) {
      return "";
    }

    if (type === "collapse" && sideNav) {
      returnValue = href ? (
        <Link
          href={href}
          key={key}
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: "none" }}
        >
          <SidenavCollapse
            color={color}
            name={name}
            icon={icon}
            active={key === collapseName}
            noCollapse={noCollapse}
          />
        </Link>
      ) : (
        <NavLink to={route} key={key}>
          <SidenavCollapse
            color={color}
            key={key}
            name={name}
            icon={icon}
            active={key === collapseName}
            noCollapse={noCollapse}
          />
        </NavLink>
      );
    } else if (type === "title") {
      returnValue = (
        <SoftTypography
          key={key}
          display="block"
          variant="caption"
          fontWeight="bold"
          textTransform="uppercase"
          opacity={0.6}
          pl={3}
          mt={2}
          mb={1}
          ml={1}
        >
          {title}
        </SoftTypography>
      );
    } else if (type === "divider") {
      returnValue = <Divider key={key} />;
    }

    return returnValue;
  });

  return (
    <CustomSidebar {...rest} variant="permanent" ownerState={{ transparentSidenav, miniSidenav }}>
      {/* logo container */}
      <SoftBox textAlign="center">
        <SoftBox
          display={{ xs: "block", xl: "none" }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
          sx={{ cursor: "pointer" }}
        >
          <SoftTypography variant="h6" color="secondary">
            <Icon sx={{ fontWeight: "bold" }}>close</Icon>
          </SoftTypography>
        </SoftBox>
        <SoftBox component={NavLink} to="/homepage" display="flex" alignItems="center">
          {brand && <SoftBox component="img" src={brand} alt="AUG.Global" width="80%" style={{
            marginLeft: "auto",
            marginRight: "auto"
          }} />}
          <SoftBox
            width={!brandName && "100%"}
            sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
          >
          </SoftBox>
        </SoftBox>
      </SoftBox>
      {/* logo container */}
      <Divider />
      <List>{renderRoutes}</List>
    </CustomSidebar>
  );
}


// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
  color: "info",
  brand: "",
};

// Typechecking props for the Sidenav
Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const CustomSidebar = styled(SidenavRoot)`
 > div.MuiDrawer-paperAnchorLeft {
  background: #fff!important;
  border-radius:0!important;
  height:100%;
  box-shadow:0 0 40px rgba(0,0,0,.05)!important;
  margin:0!important;
  padding:1.5rem;
  /*Logo Size*/
  img {
    margin-bottom:.5rem;
  }
  ul li > div {
    margin:0;
    padding-left:0;
    padding-right:0;
  }
  ul > span {
    padding-left:0;
    margin-left:0;
    margin-top:2rem;
  }

  ul a:hover li div {
    color:#000;
    > div:first-of-type {
      svg {
        fill:#000;
      }
    }
  }
 }
`

export default Sidenav;
