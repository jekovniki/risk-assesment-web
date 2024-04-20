import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import {Grid, Menu, MenuItem} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Navigation from "./navigation";

const DefaultLayout = ({ children, title, email }: { children: ReactNode, title: string, email: string }) => {
    const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
    const [navOpen, setNavOpen] = useState(true);
    const open = Boolean(anchorElement);
    const navigation = useNavigate();
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElement(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorElement(null);
    };
    return (
        <StyledGrid container>
            <Grid item xs={navOpen ? 6 : 1} md={navOpen ? 3 : 1} lg={navOpen ? 2 : 1} xl={navOpen ? 2 : .6}>
                <Navigation onClick={() => { setNavOpen(!navOpen) }} open={navOpen} />
            </Grid>
            <Grid item xs={navOpen ? 6 : 11} md={navOpen ? 9 : 11} lg={navOpen ? 10 : 11} xl={navOpen ? 10 : 11.4}>
                <StyledTopContainer>
                    <StyledDiv>
                        <StyledHeader>{title}</StyledHeader>
                    </StyledDiv>
                    <StyledDiv>
                        <span
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            style={{ cursor: "pointer" }}
                        >{email} <KeyboardArrowDownIcon style={{ marginBottom: "-7px"}}/></span>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorElement}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem key="profile" onClick={() => {navigation("/profile")}}>Profile</MenuItem>
                            <MenuItem key="logout" onClick={() => {navigation("/")}}>Logout</MenuItem>
                        </Menu>

                    </StyledDiv>
                </StyledTopContainer>
                <StyledMain>
                    {children}
                </StyledMain>
            </Grid>
        </StyledGrid>
    )

}

const StyledMain = styled.main`
    box-sizing: border-box;
`;

const StyledHeader = styled.h1`
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
`;

const StyledTopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 0 1rem;
    color: rgba(14, 26, 50, 1);
    height: 80px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const StyledDiv = styled.div``;

const StyledGrid = styled(Grid)`
    background-color: rgba(246, 249, 255, 1);
    min-height: 100vh;
`;

export default DefaultLayout;