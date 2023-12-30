import styled, { keyframes } from 'styled-components';

const Loader = ({ customColor }) => {
    return (
        <LoaderBox>
            <LoaderWrapper>
                <LoaderInternal color={customColor}></LoaderInternal>
                <LoaderInternal color={customColor}></LoaderInternal>
                <LoaderInternal color={customColor}></LoaderInternal>
                <LoaderInternal color={customColor}></LoaderInternal>
            </LoaderWrapper>
        </LoaderBox>

    )
}

const LoaderWrapper = styled.div`
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;

    div:nth-child(1) {
        animation-delay: -0.45s;
    }

    div:nth-child(2) {
        animation-delay: -0.3s;
    }

    div:nth-child(3) {
        animation-delay: -0.15s;
    }
`;

const ldsRing = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const LoaderInternal = styled.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 18px;
    height: 18px;
    margin: 2px;
    border: 4px solid ${props => props.color ? props.color : "#fff"};
    border-radius: 50%;
    animation: ${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${props => props.color ? props.color : "#fff"} transparent transparent transparent;
`;

const LoaderBox = styled.div`
    text-align: center;
    marginBottom: 2rem;
    marginTop: 2rem;
`

export default Loader;