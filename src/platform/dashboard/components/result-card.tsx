import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface IResultCard {
    imageSrc: string;
    name: string;
    dateOfBirth: string;
    location: string;
    gender: string;
    citizenship: string;
}

export const ResultCard = ({
    imageSrc,
    name,
    dateOfBirth,
    location,
    gender,
    citizenship
}: IResultCard) => {

    return (
        <StyledWrapper>
            <Grid container>
                <Grid item xs={2} lg={3} xl={2}>
                    <StyledImage src={imageSrc} alt={name} />
                </Grid>
                <Grid item xs={10} lg={9} xl={10} pl={2} style={{
                    display: "flex",
                    flexFlow: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    alignItems: "center"
                }}>
                    <StyledWrapperTopLine>
                        <StyledName>{ name }</StyledName>
                        <StyledClose>
                            <ArrowForwardIcon />
                        </StyledClose>
                    </StyledWrapperTopLine>
                    <Grid container pt={12}>
                        <Grid item xs={6} md={4} lg={3}>
                            <StyledLabel>
                                Date of Birth
                            </StyledLabel>
                            <StyledValue>
                                { dateOfBirth }
                            </StyledValue>
                        </Grid>
                        <Grid item xs={6} md={4} lg={3}>
                            <StyledLabel>
                                Place of Birth
                            </StyledLabel>
                            <StyledValue>
                                { location }
                            </StyledValue>
                        </Grid>
                        <Grid item xs={6} md={4} lg={3}>
                            <StyledLabel>
                                Gender
                            </StyledLabel>
                            <StyledValue>
                                { gender }
                            </StyledValue>
                        </Grid>
                        <Grid item xs={6} md={4} lg={3}>
                            <StyledLabel>
                                Citizenship
                            </StyledLabel>
                            <StyledValue>
                                { citizenship }
                            </StyledValue>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </StyledWrapper>
    )
}

const StyledLabel = styled.div`
    color: rgba(68, 83, 114, 1);
    font-weight: 300;
    font-size: 13px;
    line-height: 15.6px;
`;

const StyledValue = styled.div`
    color: rgba(68, 83, 114, 1);
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 500;
`;

const StyledWrapperTopLine = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const StyledClose = styled.div`
    color: rgba(68, 83, 114, 1);
    cursor: pointer;
    > svg {
        width: 24px;
        height: 24px;
    }
`;

const StyledName = styled.div`
    color: rgba(14, 26, 50, 1);
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    margin-left: 2rem;
`;

const StyledImage = styled.img`
    border-radius: 3px;
    height: 180px;
    width: 100%;
    object-fit: cover;
`;

const StyledWrapper = styled.div`
    background: #fff;
    border-radius:3px;
    box-shadow: 0px 0px 50px 0px rgba(71, 100, 157, 0.05);
    padding: 1.5rem;
    width:100%;
    height: 183px;
`;

ResultCard.defaultProps = {
    imageSrc: "",
    name: "",
    dateOfBirth: "",
    location: "",
    gender: "",
    citizenship: ""
}