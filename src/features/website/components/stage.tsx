import styled from "@emotion/styled"
import { mainColors } from "../../../app/theme"

const content = {
    title: <>Your <strong>Safety</strong>, Our <strong>Priority</strong></>,
    subtitle: "Our PEP Check service offers meticulous screening of Politically Exposed Persons, minimizing financial and reputational risks. Stay compliant and secure with our advanced verification, empowering your business to make informed decisions effortlessly.",
    tryText: "Try it now",
    tryInputPlaceholder: "Boyko Borissov",
    tryInputButton: "Check Now"
}

const Stage = () => {

    return (
        <StyledSection id="staging">
            <StyledWrapper>
                <StyledTitle>{ content.title }</StyledTitle>
                <StyledSubtitle>
                    <p>{ content.subtitle }</p>
                </StyledSubtitle>
                <StyledTryItNow>
                    <p>{ content.tryText }</p>
                </StyledTryItNow>
                <StyledTryWrapper>
                    <StyledInput placeholder={content.tryInputPlaceholder} />
                    <StyledButton>
                        { content.tryInputButton }
                    </StyledButton>
                </StyledTryWrapper>
            </StyledWrapper>
        </StyledSection>
    )
}

const StyledWrapper = styled.div`
    max-width: 810px;
    width: 100%;
    @media only screen and (max-width: 1300px) {
        margin: 0 1rem;
    }
`;

const StyledSection = styled.section`
    min-height: 80vh;
`;

const StyledTitle = styled.h1`
    margin-top: 17vh;
    font-size: 4.375rem;
    line-height: 6rem;
    font-weight: 100;
    margin-bottom:0;
    animation: show-homepage;
    animation-duration: 1.9s;
`;

const StyledSubtitle = styled.div`
    font-size: 1.125rem;
    line-height: 1.875rem;
    font-weight: 200;
    margin-top: 5vh;
    animation: show-homepage;
    animation-duration: 2.3s;
`;

const StyledTryItNow = styled.div`
    font-size: 1rem;
    line-height: 1.8rem;
    font-weight: 200;
    margin-top: 10vh;
    animation: show-homepage;
    animation-duration: 2.7s;
`;

const StyledTryWrapper = styled.div`
    max-width: 700px;
    width: 100%;
    background-color: ${mainColors.yellow};
    height: 100px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10vh;
    border-radius: 3px;
    padding: .5rem;
    display: flex;
    align-items: center;
    animation: show-homepage;
    animation-duration: 3.2s;
`;

const StyledButton =  styled.a`
    color: #fff;
    font-weight: 400;
    background-color: ${mainColors.blue};
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    transition: .4s;
    border-radius: 3px;
    max-width: 170px;
    margin-left: .5rem;

    &:hover {
        transition: .4s;
        background-color: ${mainColors.blue2};
        color: #fff;
        cursor: pointer;
    }
`;

const StyledInput = styled.input`
    background-color: rgba(0, 0, 0, 0.15);
    color: #fff;
    font-weight: 200;
    border-radius: 3px;
    border: none;
    width: 100%;
    height: 100%;
    font-size: 1.25rem;
    line-height: 2.25rem;
    padding-left: 1rem;
    &:focus-visible {
        outline: none;
    }

    &::placeholder {
        color: #fff;
    }
`;


export default Stage;