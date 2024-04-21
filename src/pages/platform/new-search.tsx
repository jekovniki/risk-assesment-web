import styled from "@emotion/styled";
import { Grid, Modal, Typography, Box } from "@mui/material";
import { useState } from "react";
import { useGetUser } from "../../services/users";
import { useSearch } from "../../features/platform/search/api/use-search";
import DefaultLayout from "../../features/platform/common/containers/layout";
import { Loader } from "../../features/platform/common/components/loader";
import CustomSearchBoxDetailed from "../../features/platform/search/components/search-box-detailed";
import SearchAccordion from "../../features/platform/search/container/search-accordion";
import SearchResults from "../../features/platform/search/container/search-results";
import { SearchResultCheckbox } from "../../features/platform/search/components/search-result-checkbox";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    borderRadius: "20px",
    transform: 'translate(-50%, -50%)',
    width: 400,
    color: '#FF6961',
    bgcolor: '#f8f8f8',
    border: '2px solid #FF6961',
    textAlign: 'center',
    boxShadow: 24,
    p: 4,
  };

const NewSearch = () => {
    const { isLoading, data }: { isLoading: boolean, error: any, data: any } = useGetUser();
    const email = data && data.email ? data.email : "";
    const [open, setOpen] = useState(false);
    const [isSearched, setIsSearch] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [searchedData, setSearchedData] = useState({
        name: "",
        entities: "",
        citizenship: "",
        nationality: "",
        idValue: "",
        issuer: "",
        idType: "",
        dateOfBirth: ""
    });
    const [result, setResult] = useState([] as any);
    const find = useSearch();

    const handleSearch = (input: {
        search: string,
        name: string,
        entities: string,
        citizenship: string,
        nationality: string,
        idValue: string,
        issuer: string,
        idType: string,
        dateOfBirth: string,
        ongoingScreening: boolean
    }) => {
        try {
            const { search, ongoingScreening, ...searchValues } = input;
            setSearchedData(searchValues);
            find.mutate({
                search: input.search,
                ongoingScreening: ongoingScreening
            }, {
                onSuccess: (data) => {
                    console.log(data);
                    setResult(data.data);
                    setOpen(true);
                    setIsSearch(true);
                },
                onError: (error: any) => {
                    const errorMessage = error?.response?.data?.error || error.message || "Internal error";
                    setErrorMessage(errorMessage)
                    console.error(error);
                }
            })
        } catch (error) {
            console.error(error);
        }
    }

    const [checkedItems, setCheckedItems] = useState([] as any);

    const handleMarkAsFalse = () => {
        const updatedResult = result.hits.filter((item: any) => !checkedItems.includes(item.caption));
        setResult({
            ...result,
            hits: updatedResult
        });
    }

    const handleCheckboxChange = (name: string, isChecked: boolean) => {
        if (isChecked) {
            setCheckedItems((prevItems: any) => [...prevItems, name]);
        } else {
            setCheckedItems((prevItems: any) => prevItems.filter((item: any) => item !== name));
        }
    };

    return (
        <DefaultLayout title="New Search" email={email}>
            {isLoading ? <Loader /> :
                <>
                    <Grid container padding={2} color="rgba(68, 83, 114, 1)">
                        <SearchAccordion show={open} searchValues={searchedData}>
                            <StyledCard>
                                <Grid container gap={0}>
                                    <Grid item xs={12}>
                                        <CustomSearchBoxDetailed onSubmit={handleSearch} />
                                    </Grid>
                                </Grid>
                            </StyledCard>
                        </SearchAccordion>
                    </Grid>
                    {isSearched ?
                        <Grid container>
                            <Grid item xs={12}>
                                <StyledWrapper>
                                    <Grid item xs={11.8} ml={2}>
                                        <SearchResults name={searchedData.name} resultsLength={result?.hits?.length} onMarkAsFalse={handleMarkAsFalse}>
                                            {
                                                find.isLoading ? <Loader /> : result && result?.hits?.length ?
                                                    result.hits.map((item: Record<string, any>) =>
                                                        <SearchResultCheckbox
                                                            key={item.caption}
                                                            data={item}
                                                            checked={checkedItems[item.caption]}
                                                            onCheckboxChange={handleCheckboxChange}
                                                        />
                                                    )
                                                    : ""}
                                        </SearchResults>
                                    </Grid>
                                </StyledWrapper>
                            </Grid>
                        </Grid> : ""}

                </>
            }
            <Modal
                open={Boolean(errorMessage)}
                onClose={() => {setErrorMessage('')}}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-description" sx={{ m: 2 }}>
                        { errorMessage }
                    </Typography>
                </Box>
            </Modal>
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