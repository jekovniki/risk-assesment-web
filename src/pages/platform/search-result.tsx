import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";

import DefaultLayout from "../../features/platform/common/containers/layout";
import { useGetUser } from "../../services/users";
import { Loader } from "../../features/platform/common/components/loader";
import BasicTabs from "../../features/platform/search/container/search-result-tabs";
import { PepCard } from "../../features/platform/search/container/pep-card";

const SearchResult = () => {
    const { isLoading, error, data }: {isLoading : boolean, error: any, data: any} = useGetUser();
    const email = data && data.email ? data.email : "";
    const location = useLocation();
    const pageData = location.state.data;
    
    return (
        <DefaultLayout title={"Search Result" + ": " + pageData.caption} email={email}>
            { isLoading ? <Loader /> :
            <Grid container gap={3} mt={2}>
                <Grid item xs={11.4}>
                    <PepCard key={pageData.caption} data={pageData} isOpen={true} />
                </Grid>
                <Grid item ml={3} xs={11.4}>
                    <BasicTabs data={pageData} />
                </Grid>
            </Grid>
            }
        </DefaultLayout>
    )
}

export default SearchResult;