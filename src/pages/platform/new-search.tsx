import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { useState } from "react";
import { useGetUser } from "../../services/users";
import { useSearch } from "../../features/platform/search/api/use-search";
import DefaultLayout from "../../features/platform/common/containers/layout";
import { Loader } from "../../features/platform/common/components/loader";
import CustomSearchBoxDetailed from "../../features/platform/search/components/search-box-detailed";
import { ResultCard } from "../../features/platform/common/components/result-card";

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

    return (
        <DefaultLayout title="New Search" email={email}>
            {isLoading ? <Loader /> :
                <>
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
                                        <CustomSearchBoxDetailed onSubmit={handleSearch} />
                                    </Grid>
                                </Grid>
                            </StyledCard>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <StyledWrapper>
                                    <Grid item xs={11.4} mt={2} ml={-2} mr={2}>
                                        { result && result?.hits?.length ? 
                                        result.hits.map((item: Record<string, any>) => 
                                            <ResultCard
                                                key={item.caption}
                                                name={item.caption}
                                                location={item?.properties?.address?.[0] ?? ""}
                                                dateOfBirth={item?.properties?.birthDate?.[0] ?? ""}
                                                gender={item?.properties?.gender?.[0] ?? ""}
                                                imageSrc={""}
                                                citizenship={item?.properties?.nationality?.[0] ?? ""}
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