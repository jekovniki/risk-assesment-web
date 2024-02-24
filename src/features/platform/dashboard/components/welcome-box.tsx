import styled from "@emotion/styled";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import CloseIcon from '@mui/icons-material/Close';

const content = {
    hello: "Hello",
    text: "Welcome to our pep check services! We're here to ensure you receive the best assistance possible. How can we support you today?"
}

export const WelcomeBox = ({ name }: { name: string }) => {
    const [display, setDisplay] = useState(true);

    return (
        <StyledWelcomeDiv style={{ display: display ? "block" : "none" }}>
            <StyledWelcomeText>
                {content.hello} <strong>{name}</strong>
            </StyledWelcomeText>
            <StyledText>
                {content.text}
            </StyledText>
            <StyledClose onClick={() => { setDisplay(false) }}>
                <CloseIcon />
            </StyledClose>
        </StyledWelcomeDiv>
    )
}

const StyledWelcomeDiv = styled.div`
    position: relative;
    background: linear-gradient(266.83deg, #2E88DB 2.79%, #0063BF 84.88%);
    padding: 25px 25px 50px 50px;
    border-radius: 3px;
    width: 100%;
    text-align:left;
`;

const StyledClose = styled.div`
    position: absolute;
    top: 20px;
    right: 25px;
    font-size: 32px;
    > svg {
        font-size: 32px;
        cursor: pointer;
    }
`;

const StyledWelcomeText = styled.div`
    padding-top: 25px;
    font-size: 46px;
    line-height: 55.2px;
    font-weight: 200;
`;

const StyledText = styled.p`
    font-weight: 200;
    font-size: 1rem;
`;