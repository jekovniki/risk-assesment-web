import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Loader } from "../../common/components/loader";

interface ILatestSearchItems {
    name: string;
    keyData: string[]
}

export const LatestSearch = ({ input, loading } : { input: ILatestSearchItems[], loading: boolean }) => {
    const navigate = useNavigate();

    const goToSearchHistory = () => {
        navigate("/search-history");
    }

    return (
        <StyledWrapper>
            <StyledTopWrapper>
                <StyledTitle>Latest Searches</StyledTitle>
                <StyledArrowBox onClick={goToSearchHistory}>
                    <ArrowForwardIcon />
                </StyledArrowBox>
            </StyledTopWrapper>
            <StyledContent>
                { loading ? <Loader /> : 
                    input.length ? input.slice(-5).map(person => {
                    return (
                    <StyledSearchLine key={person.name}>
                        <StyledName>{person.name}</StyledName>
                        <StyledKeyData>
                            { person.keyData.length ? 
                            person.keyData.map(key => {
                                return <StyledKeyDataOption key={key}>
                                    { key }
                                </StyledKeyDataOption>
                            }) : ""}
                        </StyledKeyData>
                    </StyledSearchLine>)
                }) : "" }
                
            </StyledContent>
        </StyledWrapper>
    )
}

const StyledKeyDataOption = styled.div`
    color: rgba(222, 32, 32, 1);
    font-size: 12px;
    line-height: 14.4px;
    font-weight: 600;
    padding: .25rem .35rem;
    background-color: rgba(222, 32, 32, .3);
    margin-left: .5rem;
    border-radius: 3px;
`;

const StyledKeyData = styled.div`
    display: flex;
`;

const StyledName = styled.div`
    color: rgba(14, 26, 50, 1);
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 500;
`;

const StyledSearchLine = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: .4s;
    &:hover {
        transition: .4s;
        opacity: .6;
    }
`;

const StyledContent = styled.div`
    padding-top:1rem;
    margin-top: 1rem;
`;

const StyledTitle = styled.div`
    color: rgba(68, 83, 114, 1);
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 300;
`;

const StyledArrowBox = styled.div`
    color: rgba(68, 83, 114, 1);
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

const StyledTopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const StyledWrapper = styled.div`
    background: #fff;
    border-radius:3px;
    box-shadow: 0px 0px 50px 0px rgba(71, 100, 157, 0.05);
    padding: 1rem;
    display: flex;
    width:100%;
    justify-content:space-between;
    flex-flow: column;
`;

LatestSearch.defaultProps = {
    input: []
}