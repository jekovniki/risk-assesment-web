import { ReactNode } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";


interface IMenuItem {
    title: string;
    icon: ReactNode;
    route: string;
    active: boolean;
}
export const MenuItem = ({ title, icon, route, active } : IMenuItem) => {
    const navigate = useNavigate();
    return (
        <StyledDiv className={active ? "active" : "" } onClick={() => { navigate(route) }}>
            { icon }
            <StyledTitle>
                { title }
            </StyledTitle>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    box-sizing: border-box;
    color: rgba(68, 83, 114, 1);
    display: flex;
    height: 55px;
    border-radius: 3px;
    align-items: center;
    width:100%;
    transition: .4s;
    padding-left: 1rem;
    margin-bottom: .5rem;

    &:hover {
        transition: .4s;
        background: linear-gradient(266.83deg, #2E88DB 2.79%, #0063BF 84.88%);
        color: #fff;
        cursor: pointer;
    }
    
    &.active {
        transition: .4s;
        color: #fff;
        background: linear-gradient(266.83deg, #2E88DB 2.79%, #0063BF 84.88%);
    }

    > svg {
        width: 30px;
        height: auto;
    }
`;

const StyledTitle = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 19.2px;
    margin-left: 10px;
`;