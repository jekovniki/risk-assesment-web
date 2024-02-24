import { ReactNode } from "react";
import styled from "@emotion/styled";

const DefaultContainer = ({ children }: { children : ReactNode}) => {

    return (
        <Wrapper>
            { children }
        </Wrapper>
    )
}

const Wrapper = styled.main`
    min-height: 100vh;
    height: 100%;
    width:100%;
    display: flex;
    align-items: center;
    justify-content:space-around;
    flex-flow: column;
    color: #1a1a1a;
`;

export default DefaultContainer;