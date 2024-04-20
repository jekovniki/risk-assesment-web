import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";

import logo from '../../../../assets/RISK-LOGO.svg';
import { routes } from "../../../../pages/routes";
import { MenuItem } from "../components/menu-item";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Navigation = ({ onClick = () => {}, open} : { onClick: any, open: boolean}) => {
    const path = useLocation();
    const sideNav = routes.filter(route => route.sideNav === true);

    return(
        <StyledWrapper>
            <div style={{ minHeight: '26.969px'}}>
                { open ? 
                <StyledImage src={logo} alt="Risk Assesment" /> : <span style={{
                    fontSize: '26.969px',
                    color: '#000' 
                }}>R<strong>A</strong></span>
                
            }
            </div>
            <StyledNav className={open ? "open" : "closed" }>
                {sideNav.map(route => 
                    <MenuItem 
                        key={route.name} 
                        title={route.name} 
                        icon={route.icon} 
                        route={route.route} 
                        active={path.pathname === route.route} 
                        open={open}
                    />
                )}
            </StyledNav>
            <StyledBottom onClick={onClick}>
                <span style={{ fontSize: "2.5rem", color: 'rgb(68, 83, 114)' }} >
                    { open ? <MenuOpenIcon /> : <MenuIcon /> }
                </span>
            </StyledBottom>
        </StyledWrapper>
    )
}

const StyledBottom = styled.div`
    border-top: 1px solid #ededed;
    height:60px;
    position: absolute;
    bottom: 0;
    left:0;
    width:100%;
    transition: .4s;
    cursor: pointer;
    &:hover {
        background-color: #ededed;
        transition: .4s;
    }

    svg {
        width: 30px;
        height: 30px;
    }
`;

const StyledImage = styled.img`
    width: 80%;
    margin-top: .5rem;
    padding:0 10%;
    @media only screen and (max-width: 1800px) {
        width: 90%;
        padding: 0 5%;
    }
`;

const StyledNav = styled.nav`
    margin: 2rem 7.5% 0;
    @media only screen and (max-width: 1800px) {
        margin: 2rem 2.5% 0;
    }
    &.closed {
        > div {
            padding-left: 0;
            svg {
                margin-left: auto;
                margin-right: auto;
                transition: .4s;
                width: 30px;
            }
        }
    }
`;

const StyledWrapper = styled.div`
    position:relative;
    box-sizing: border-box;
    padding: 1rem 0;
    height: 100%;
    background-color: #fff;
    box-shadow: 0px 0px 50px 0px rgba(71, 100, 157, 0.05);
`;

export default Navigation;