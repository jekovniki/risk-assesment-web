import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import { useSearchHisory } from "../../features/platform/search/api/use-search-history";
import { useGetUser } from "../../services/users";
import DefaultLayout from "../../features/platform/common/containers/layout";
import { Loader } from "../../features/platform/common/components/loader";
import { WelcomeBox } from "../../features/platform/common/components/welcome-box";
import { SmallSearch } from "../../features/platform/search/components/small-search";
import { LatestSearch } from "../../features/platform/search/components/latest-search";

const Dashboard = () => {
    const { isLoading, error, data }: { isLoading: boolean, error: any, data: any } = useGetUser();
    const email = data && data.email ? data.email : "";
    const firstName = data && data.firstName ? data.firstName : "";
    const searchHistory = useSearchHisory();
    const latestSearch = searchHistory.data?.data as any[] || [];

    return (
        <DefaultLayout title="Dashboard" email={email}>
            {isLoading ?
                <Loader /> :
                <Grid container padding={2}>
                    <Grid item xs={10.3} sm={10.65} md={10.9} lg={11.15} xl={11.45} paddingBottom={2}>
                        <WelcomeBox name={firstName} />
                    </Grid>
                    <Grid item xs={12} xl={8.75} pr={5} pb={2}>
                        <SmallSearch value="Delyan Peevski" disabled={true} />
                    </Grid>
                    <Grid item xs={11.59} xl={3}>
                        <LatestSearch input={latestSearch.map(history => {
                            return {
                                name: history.search,
                                keyData: ['Open sanctions']
                            }
                        })} loading={searchHistory.isLoading} />
                    </Grid>
                </Grid>
            }
        </DefaultLayout>
    )
}

const WrapperDiv = styled(Grid)`
    padding-left: 3rem;
    @media only screen and (max-width: 1100px) {
        padding-left:0!important;
        > div {
            margin-left: 0rem;
        }
    }
`;

export default Dashboard;