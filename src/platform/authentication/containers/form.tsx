import { ReactNode } from "react";
import styled from "@emotion/styled";

import Logo from "../../../assets/RISK-LOGO.svg";
import { Image } from "../components/image";


const AuthForm = ({ children } : { children: ReactNode }) => {

    return (
        <StyledWrapper>
            <Image src={Logo} alt="Risk Assesment" />
            { children }
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    animation: show-homepage;
    animation-duration: 1s;
`;



export default AuthForm;