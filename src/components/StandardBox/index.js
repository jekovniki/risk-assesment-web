import SoftBox from "../SoftBox"
import styled from "styled-components";

export const StandardBox = ({ children, ml=0 }) => {
    return (<Box ml={ml}>
        { children }
    </Box>)
}

const Box = styled(SoftBox)`
    border-radius: 5px;
    padding: 2rem;
    margin: 1rem 0;
    background-color: #fff!important;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;