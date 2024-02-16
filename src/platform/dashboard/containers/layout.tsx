import { ReactNode } from "react";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Navigation from "./navigation";

const DefaultLayout = ({ children, title } : { children: ReactNode, title: string }) => {

    return (
        <StyledGrid container>
            <Grid item  xs={12} md={3} lg={2}>
                <Navigation />
            </Grid>
            <Grid item xs={12} md={9} lg={10}>
                <StyledTopContainer>
                    <StyledDiv>
                        <StyledHeader>{ title }</StyledHeader>
                    </StyledDiv>
                    <StyledDiv>
                        nikolay.1990@gmai.com
                    </StyledDiv>
                </StyledTopContainer>
                <StyledMain>
                    { children }
                </StyledMain>
            </Grid>
        </StyledGrid>
    )

}

const StyledMain = styled.main``;

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