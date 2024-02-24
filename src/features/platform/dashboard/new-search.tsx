import styled from "@emotion/styled";
import { Grid } from "@mui/material";

import DefaultLayout from "./containers/layout";
import { useGetUser } from "../../../services/users";
import { Loader } from "./components/loader";

const NewSearch = () => {
    const { isLoading, error, data }: {isLoading : boolean, error: any, data: any} = useGetUser();
    const email = data && data.email ? data.email : "";

    return (
        <DefaultLayout title="New Search" email={email}>
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
                    <Grid container item xs={12} md={5} lg={4}>
                        <StyledCard>
                            Left
                        </StyledCard>
                    </Grid>
                    <Grid container item xs={12} md={7} lg={8}>
                        <StyledCard>
                            Right
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

const StyledCard = styled.div`
    padding: 1.8rem;
    margin: .5rem;
    background-color: #fff;
    width: 100%;
    border-radius: 3px;
`;


export default NewSearch;