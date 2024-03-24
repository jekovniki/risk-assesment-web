import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";

import DefaultLayout from "../../features/platform/common/containers/layout";
import { useGetUser } from "../../services/users";
import { Loader } from "../../features/platform/common/components/loader";

const SearchResult = () => {
    const { isLoading, error, data }: {isLoading : boolean, error: any, data: any} = useGetUser();
    const email = data && data.email ? data.email : "";
    const location = useLocation();
    console.log(location.state.data);
    return (
        <DefaultLayout title="Search Result" email={email}>
            { isLoading ? <Loader /> :
            <>
                <Grid container padding={2} color="rgba(68, 83, 114, 1)">
                    <Grid container item xs={12}>
                        <StyledCard>
                            <StyledResultOverview>
                                <StyledResultBox>
                                    Name <strong>"Delyan Peevski"</strong>
                                </StyledResultBox>
                                <StyledResultBox>
                                    Place of birth <strong>"Silistra"</strong>
                                </StyledResultBox>
                                <StyledResultBox>
                                    Date of Birth <strong>"1975"</strong>
                                </StyledResultBox>
                                <StyledResultBox>
                                    Case Id <strong>"b4c44g1020-t4020-n3330910"</strong>
                                </StyledResultBox>
                            </StyledResultOverview>
                        </StyledCard>
                    </Grid>
                    <Grid container item xs={12} md={5} lg={3}>
                        <StyledCard>
                            <StyledGroups>
                                Groups<br/><br/>
                                <strong>Unresolved (<span style={{color: "red"}}>148</span>)</strong><br/>
                                <strong>Positive (0)</strong><br/>
                                <strong>Possible (0)</strong><br/>
                                <strong>False (<span style={{color: "red"}}>2</span>)</strong><br/>
                                <strong>Unspecified (0)</strong>
                            </StyledGroups>
                        </StyledCard>
                    </Grid>
                    <Grid container item xs={12} md={7} lg={9}>
                        <StyledCard>
                            <div style={{ marginBottom: ".5rem" }}>Groups</div>
                        </StyledCard>
                    </Grid>
                </Grid>
            </>
            }
        </DefaultLayout>
    )
}

const StyledResultOverview = styled.div`
    display: flex;
    align-items: start;
`;

const StyledResultBox = styled.div`
    margin-right: 2rem;
`;

const StyledGroups = styled.div`
    text-align: left;
`;

const StyledCard = styled.div`
    padding: 1.8rem;
    margin: .5rem;
    background-color: #fff;
    width: 100%;
    border-radius: 3px;
`;


export default SearchResult;