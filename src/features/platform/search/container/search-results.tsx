import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

export interface ISearchValues {
    name: string,
    entities: string,
    citizenship: string,
    nationality: string,
    idValue: string,
    issuer: string,
    idType: string,
    dateOfBirth: string
}

const SearchResults = ({ name, resultsLength, children }: { name: string, resultsLength: number, children: any }) => {
    return (
        <StyledWrapper>
            <Grid container item xs={12}>
                <StyledCard>
                    <Grid container gap={0}>
                        <Grid item xs={12} pt={2} pl={3} pr={3} style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            color: "rgba(68, 83, 114, 1)"
                            }}>
                                <div>
                                    Showing <strong>{resultsLength}</strong> of <strong>{resultsLength}</strong> results for <strong>"{name}"</strong>
                                </div>
                                <div style={{display: "flex"}}>
                                    <StyledMarkAsFalse>
                                        <DoDisturbIcon style={{ fontSize: '1rem'}} />Mark as False
                                    </StyledMarkAsFalse>
                                    <StyledMarkAsFalse style={{marginLeft: ".75rem"}}>
                                        <InsertDriveFileOutlinedIcon style={{ fontSize: '1rem'}} />Export as *.PDF
                                    </StyledMarkAsFalse>
                                </div>
                        </Grid>
                    </Grid>
                    <Grid container gap={0}>
                        <Grid item xs={11.8} style={{ textAlign: "left" }} pl={3} pt={4} pb={4}>
                            { children }
                        </Grid>
                    </Grid>
                </StyledCard>
            </Grid>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    height: auto;
    width: 100%;
`;

const StyledCard = styled.div`
    margin: .5rem;
    background-color: #fff;
    width: 100%;
    border-radius: 3px;
    transition: .4s;
`;

const StyledMarkAsFalse = styled.div`
    display: flex;
    align-items: center;
    font-size: .875rem;
    transition: .4s;
    font-weight: 500;
    &:hover {
        transform: scale(1.07);
        cursor:pointer;
        transition: .4s;
    }
`;

export default SearchResults;