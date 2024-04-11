import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { useState } from "react";
import { useGetUser } from "../../services/users";
import { useSearch } from "../../features/platform/search/api/use-search";
import DefaultLayout from "../../features/platform/common/containers/layout";
import { Loader } from "../../features/platform/common/components/loader";
import CustomSearchBoxDetailed from "../../features/platform/search/components/search-box-detailed";
import { ResultCard } from "../../features/platform/search/container/result-card";
import StatisticsBox from "../../features/platform/search/container/statistics-box";

const NewSearch = () => {
    const { isLoading, data }: { isLoading: boolean, error: any, data: any } = useGetUser();
    const email = data && data.email ? data.email : "";
    const [result, setResult] = useState([] as any);
    const search = useSearch();

    const handleSearch = (input: { search: string }) => {
        try {
            search.mutate({
                search: input.search,
                schema: "",
                nationality: '',
                country: '',
                gender: "",
                byAlias: false
            }, {
                onSuccess: (data) => {
                    console.log(data);
                    setResult(data.data);
                }
            })
        } catch (error) {
            console.error(error);
        }
    }

    const group = [{
        text: 'Unresolved',
        value: 148
    }, {
        text: 'Positive',
        value: "0"
    }, {
        text: 'Possible',
        value: "0"
    }, {
        text: "False",
        value: 2
    }, {
        text: 'Unspecified',
        value: "0"
    }]

    return (
        <DefaultLayout title="New Search" email={email}>
            {isLoading ? <Loader /> :
                <>
                    <Grid container padding={2} color="rgba(68, 83, 114, 1)">
                        <Grid container item xs={12} md={5} lg={4}>
                            <StatisticsBox title="Group" items={group} />
                            <StatisticsBox title="Match Name Type" items={[]} />
                            <StatisticsBox title="Gender" items={[]} />
                        </Grid>
                        <Grid container item xs={12} md={7} lg={8}>
                            <StyledCard>
                                <Grid container gap={0}>
                                    <Grid item xs={12}>
                                        <CustomSearchBoxDetailed onSubmit={handleSearch} />
                                    </Grid>
                                </Grid>
                            </StyledCard>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <StyledWrapper>
                                    <Grid item xs={11.4}>
                                        { 
                                        search.isLoading ? <Loader /> : result && result?.hits?.length ? 
                                        result.hits.map((item: Record<string, any>) => 
                                            <ResultCard
                                                key={item.caption}
                                                data={item}
                                                isOpen={false}
                                        />)
                                        : ""}
                                    </Grid>
                            </StyledWrapper>
                        </Grid>
                    </Grid>
                </>
            }
        </DefaultLayout>
    )
}

const StyledWrapper = styled.div`
    .ais-InfiniteHits > button {
        display: none;
    }
`;

const StyledCard = styled.div`
    margin: .5rem;
    background-color: #fff;
    width: 100%;
    border-radius: 3px;
`;

export default NewSearch;