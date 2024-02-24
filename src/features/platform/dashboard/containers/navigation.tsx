import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";

import logo from '../../../../assets/RISK-LOGO.svg';
import { routes } from "../../../../app/pages/routes";
import { MenuItem } from "../components/menu-item";

const Navigation = () => {
    const path = useLocation();
    const sideNav = routes.filter(route => route.sideNav === true);

    return(
        <StyledWrapper>
            <StyledImage src={logo} alt="Risk Assesment" />
            <StyledNav>
                {sideNav.map(route => 
                    <MenuItem key={route.name} title={route.name} icon={route.icon} route={route.route} active={path.pathname === route.route} />
                )}
            </StyledNav>
        </StyledWrapper>
    )
}

const StyledImage = styled.img`
    width: 80%;
    margin-top: .5rem;
    padding:0 10%;
`;

const StyledNav = styled.nav`
    margin: 2rem 7.5% 0;
`;

const StyledWrapper = styled.div`
    box-sizing: border-box;
    padding: 1rem 1rem;
    height: 100%;
    background-color: #fff;
    box-shadow: 0px 0px 50px 0px rgba(71, 100, 157, 0.05);
`;

export default Navigation;