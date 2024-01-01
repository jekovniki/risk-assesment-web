import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import ProfileIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import SoftBox from "../../../components/SoftBox";
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarMobileMenu,
} from "../../Navbars/DashboardNavbar/styles";
import DropdownMenu from "../DropdownMenu";
import { ProfileBox } from "../NavbarItems/ProfileBox";

import {
  useSoftUIController,
  setTransparentNavbar,
  setMiniSidenav,
} from "../../../context";

import { LOCAL_STORAGE_KEYS } from "../../../utils/constants";
import Storage from "../../../utils/storage";
import { getUserNavData } from "../../../utils/helpers";

function DashboardNavbar({ absolute, light, isMini, pageSpecificChildren = "", hasTitle = true, relative }) {
  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar } = controller;
  const [openMenu, setOpenMenu] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);

  const navigate = useNavigate();
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);

  const handleSubmit = async () => {
    try {
      Storage.remove(LOCAL_STORAGE_KEYS.LOGGED_IN);
      Storage.remove(LOCAL_STORAGE_KEYS.ROLE);
      Storage.remove(LOCAL_STORAGE_KEYS.USER_DATA);
      Storage.remove(LOCAL_STORAGE_KEYS.IS_TRUSTED);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  useEffect(() => {
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }
    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    window.addEventListener("scroll", handleTransparentNavbar);

    handleTransparentNavbar();

    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleCloseMenu = () => setOpenMenu(false);
  const userData = getUserNavData();

  const profileMenu = [{
    image: <ProfileIcon size="12px" />,
    title: "Profile",
    text: "Manage your profile",
    onClick: () => { handleCloseMenu(); navigate("/profile") }
  }, {
    type: "separator"
  }, {
    className: "logoutItem",
    image: < LogoutOutlinedIcon size="12px" />,
    title: "Log Out",
    text: "Bye bye and have a nice day :)",
    onClick: handleSubmit
  }];

  return (
    <CustomHeader
      position={absolute ? "absolute" : relative ? "relative" : navbarType}
      color="inherit"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <SoftBox className="titleAndButtons" color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, { isMini })}>
          {pageSpecificChildren}
        </SoftBox>
        {isMini ? null : (
          <SoftBox sx={(theme) => navbarRow(theme, { isMini })}>
            <SoftBox color={light ? "white" : "inherit"} style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
              <IconButton
                size="small"
                color="inherit"
                sx={navbarMobileMenu}
                onClick={handleMiniSidenav}
              >
                <Icon className={light ? "text-white" : "text-dark"}>
                  {miniSidenav ? "menu_open" : "menu"}
                </Icon>
              </IconButton>
              <ProfileBox handleOpen={handleOpenMenu} userData={userData} />
              <DropdownMenu openDropdown={openMenu} closeDropdown={handleCloseMenu} items={profileMenu} />
            </SoftBox>
          </SoftBox>
        )}
      </Toolbar>
    </CustomHeader>
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;

const CustomHeader = styled(AppBar)`
    background:#fff!important;
    box-shadow:0 0 40px rgba(0,0,0,.05);
    top:0;
    left:0;
    right:0;
    line-height:1;
    width:100%;
    position:absolute;
    border-radius: 0;
    padding: 0 1.5rem!important;
    min-height: 74px;
    > div {
      padding: 0!important;
    }
    .titleAndButtons {
      > div:first-of-type {
        margin-right: 1rem;
      }
    }
    h3 {
      font-size:24px;
      font-weight: 700;
    }
`