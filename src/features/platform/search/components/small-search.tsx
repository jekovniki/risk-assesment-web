import { useState } from "react";
import styled from "@emotion/styled";
import TuneIcon from '@mui/icons-material/Tune'
import { useSearchMutation } from "../../../../services/search";

export const SmallSearch = ({ disabled }: { disabled: true }) => {
    const { submitData } = useSearchMutation();
    const [searchName, setSearchName] = useState('');
    const defaultSearch = { 
        search: "", 
        ongoingScreening: false
     };

    const search = () => {
        submitData({ ...defaultSearch, search: searchName });
    }

    return (
        <StyledWrapper className={disabled ? "disabled" : ""}>
            <div style={{ padding: ".5rem", width: "50%" }}>
                <StyledInput placeholder="Type to search..." onChange={(event) => { setSearchName(event.target.value)}} />
            </div>
            <div style={{ padding: ".5rem", display: "flex" }}>
                <StyledATag onClick={search}>
                    Perform a Search
                </StyledATag>
                <StyledATagConfiguration>
                    <TuneIcon />
                </StyledATagConfiguration>
            </div>
            <div className="display-text">Temporary disabled</div>
        </StyledWrapper>
    )
}

const StyledATagConfiguration = styled.a`
    color: #fff;
    padding: 12px;
    background: rgba(14, 26, 50, 1);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 1rem;
    transition: .4s;
    &:hover {
        opacity: .7;
        transition: .4s;
        color: #fff;
        cursor: pointer;
    }
`;

const StyledATag = styled.a`
    color: #fff;
    background: linear-gradient(266.83deg, #2E88DB 2.79%, #0063BF 84.88%);
    font-size: 1rem;
    line-height: 19.2px;
    font-weight: 500;
    padding: 1rem;
    border-radius: 3px;
    transition: .4s;

    &:hover {
        cursor: pointer;
        color: #fff;
        background-color: #2E88DB;
        transition: .4s;
        opacity: .7;
    }
`;

const StyledInput = styled.input`
    background-color: #fff;
    color: rgba(68, 83, 114, 1);
    font-weight: 400;
    border-radius: 3px;
    border: none;
    width: 100%;
    height: 100%;
    font-size: 20px;
    line-height: 24px;
    &:focus-visible {
        outline: none;
    }

    &::placeholder {
        color: rgba(68, 83, 114, 1);
    }
`;

const StyledWrapper = styled.div`
    position: relative;
    background: #fff;
    border-radius:3px;
    box-shadow: 0px 0px 50px 0px rgba(71, 100, 157, 0.05);
    padding: 1rem;
    z-index: 20;
    display: flex;
    width:100%;
    justify-content:space-between;

    .display-text {
            position: absolute;
            display: block;
            top:calc(100% + 5px);
            left: 45%;
            width: 400px;
            height: auto;
            background-color: #fff;
            border: 1px solid #ededed;
            color: #000;
            opacity: 0;
            pointer-events: none;
            transition: .4s;
            z-index: 1;
            padding: 1rem .75rem;
        }

    &.disabled {
        opacity: .5;
        &:hover {
            .display-text {
                opacity: 1;
                transition: .4s;
            }
        }
        &:active {
            pointer-events: none;
        }
        
        
    }
`;

SmallSearch.defaultProps = {
    value: ""
}