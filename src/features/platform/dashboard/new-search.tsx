import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { InstantSearch, InfiniteHits } from "react-instantsearch";
import algoliasearch from 'algoliasearch/lite';

import DefaultLayout from "./containers/layout";
import { useGetUser } from "../../../services/users";
import { Loader } from "./components/loader";
import CustomSearchBoxDetailed from "../../search/components/search-box-detailed";
import { ResultCard } from "./components/result-card";

const searchClient = algoliasearch(
    'SYD9UU4OL1',
    '399941e0a94d2f17c98fd524fd533172'
);

const NewSearch = () => {
    const { isLoading, data }: { isLoading: boolean, error: any, data: any } = useGetUser();
    const email = data && data.email ? data.email : "";

    return (
        <DefaultLayout title="New Search" email={email}>
            {isLoading ? <Loader /> :
                <>
                    <InstantSearch indexName="prod_OS-People" searchClient={searchClient}>
                        <Grid container padding={2} color="rgba(68, 83, 114, 1)">
                            <Grid container item xs={12} md={5} lg={4}>
                                <StyledCard>
                                    <StyledGroups>
                                        Group
                                    </StyledGroups>
                                </StyledCard>
                            </Grid>
                            <Grid container item xs={12} md={7} lg={8}>
                                <StyledCard>
                                    <Grid container gap={0}>
                                        <Grid item xs={12}>
                                            <CustomSearchBoxDetailed
                                                placeholder="Algolia search"
                                                loadingIconComponent={({ classNames }: { classNames: any }) => (
                                                    <div className={classNames.loadingIcon}>Loading</div>
                                                )}
                                            />

                                        </Grid>
                                    </Grid>

                                </StyledCard>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <InfiniteHits hitComponent={({ hit }: { hit: any }) => {
                                    console.log('hit : ', hit);
                                    return (<Grid item xs={12} mt={2} mr={2}>
                                        <ResultCard
                                            name={hit.caption}
                                            location={hit.properties?.country?.[0] ?? ""}
                                            dateOfBirth={hit.firstSeen}
                                            gender={hit.properties?.gender?.[0] ?? ""}
                                            citizenship={hit.properties?.country?.[0] ?? ""}
                                        />
                                    </Grid>) as any;
                                }} />
                            </Grid>
                        </Grid>
                    </InstantSearch>
                </>
            }
        </DefaultLayout>
    )
}


const StyledCard = styled.div`
    padding: 1.8rem;
    margin: .5rem;
    background-color: #fff;
    width: 100%;
    border-radius: 3px;
`;

const StyledGroups = styled.div`
    text-align: left;
`;

export default NewSearch;