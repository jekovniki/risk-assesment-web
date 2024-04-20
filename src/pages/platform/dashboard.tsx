import { Grid } from "@mui/material";
import { useSearchHisory } from "../../features/platform/search/api/use-search-history";
import { useGetUser } from "../../services/users";
import DefaultLayout from "../../features/platform/common/containers/layout";
import { Loader } from "../../features/platform/common/components/loader";
import { WelcomeBox } from "../../features/platform/common/components/welcome-box";
import { SmallSearch } from "../../features/platform/search/components/small-search";
import { LatestSearch } from "../../features/platform/search/components/latest-search";

const Dashboard = () => {
    const { isLoading, error, data }: {isLoading : boolean, error: any, data: any} = useGetUser();
    const email = data && data.email ? data.email : "";
    const firstName = data && data.firstName ? data.firstName : "";
    const searchHistory = useSearchHisory();
    const latestSearch = searchHistory.data?.data as any[] || [];

    return (
        <DefaultLayout title="Dashboard" email={email}>
            {isLoading ? 
            <Loader /> :
                <>
                    <Grid container padding={2} paddingBottom={0}>
                        <WelcomeBox name={firstName} />
                    </Grid>
                    <Grid container padding={2} >
                        <Grid container item xs={12} md={8} lg={9}>
                            <Grid item xs={12}>
                                <SmallSearch value="Delyan Peevski" />
                            </Grid>
                            <Grid item xs={12} mt={2} mr={2}>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} md={4} lg={3} pl={6}>
                            <Grid item xs={12} md={11} lg={11}>
                                <LatestSearch input={latestSearch.map(history => {
                                    return {
                                        name: history.search,
                                        keyData: ['Open sanctions']
                                    }
                                })} loading={searchHistory.isLoading}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            }
        </DefaultLayout>
    )
}

export default Dashboard;