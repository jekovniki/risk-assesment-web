import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";

import DefaultLayout from "../../features/platform/common/containers/layout";
import { useGetUser } from "../../services/users";
import { Loader } from "../../features/platform/common/components/loader";
import { ResultCard } from "../../features/platform/search/container/result-card";

const SearchResult = () => {
    const { isLoading, error, data }: {isLoading : boolean, error: any, data: any} = useGetUser();
    const email = data && data.email ? data.email : "";
    const location = useLocation();
    
    return (
        <DefaultLayout title={"Search Result" + ": " + location.state.data.caption} email={email}>
            { isLoading ? <Loader /> :
            <Grid container gap={3} mt={2}>
                <Grid item xs={11.4}>
                    <ResultCard key={location.state.data.caption} data={location.state.data} isOpen={true} />
                </Grid>
            </Grid>
            }
        </DefaultLayout>
    )
}

export default SearchResult;