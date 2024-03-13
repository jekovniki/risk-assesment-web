import styled from '@emotion/styled';
import { useState, useRef } from 'react';
import {
    useInstantSearch,
    useSearchBox,
    UseSearchBoxProps
} from 'react-instantsearch';
import { Grid } from "@mui/material";
import { TextField, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { LoadingButton } from '@mui/lab';
import { ENTITIES_OPTIONS } from '../../platform/dashboard/data/search-options';
import { COUNTRIES } from '../../../utils/countries';

function CustomSearchBoxDetailed(props: UseSearchBoxProps | any) {
    const [entities, setEntities] = useState("");
    const { query, refine } = useSearchBox(props);
    const { status } = useInstantSearch();
    const [inputValue, setInputValue] = useState(query);
    const inputRef = useRef<HTMLInputElement>(null);
    const [citizenship, setCitizenship] = useState("");
    function setQuery(newQuery: string) {
        setInputValue(newQuery);

        // refine(newQuery);
    }

    return (
        <StyledWrapper>
            <TextField
                label={<>Name (<span style={{ color: "red" }}>Required</span>)</>}
                ref={inputRef}
                id="search"
                key="search"
                name="search"
                variant="filled"
                placeholder="Enter name"
                size="medium"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                type="search"
                value={inputValue}
                style={{ marginBottom: "1rem" }}
                onChange={(event) => { setQuery(event.currentTarget.value) }}
            />
            <Grid container gap={2}>
                <Grid item xs={12} lg={5.7}>
                    <FormControl fullWidth>
                        <InputLabel id="entity-label" key="entity-label">Entity type</InputLabel>
                        <Select
                            labelId="entity-label"
                            key="entity"
                            value={entities}
                            disabled={true}
                            id="entity"
                            name="entity"
                            label="Entity type"
                            onChange={(event) => { setEntities(event.target.value) }}
                        >
                            {ENTITIES_OPTIONS.map((option) =>
                                <MenuItem key={option.label} value={option.value}>{option.label}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <FormControl fullWidth>
                        <InputLabel id="citizenship-label" key="citizenship-label">Select Citizenship</InputLabel>
                        <Select
                            labelId="citizenship-label"
                            key="citizenship"
                            value={citizenship}
                            id="citizenship"
                            disabled={true}
                            name="citizenship"
                            label="Select Citizenship"
                            onChange={(event) => { setCitizenship(event.target.value) }}
                        >
                            {COUNTRIES.map((option) =>
                                <MenuItem key={option.name} value={option.code}>{option.name}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <LoadingButton
                loading={status === 'loading'}
                fullWidth
                type="submit"
                variant="contained"
                style={{ paddingTop: '.75rem', paddingBottom: '.75rem', marginTop: '1rem' }}
                onClick={() => { refine(inputValue) }}
            >
                Search
            </LoadingButton>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
        > div {
            width: 100%;
        }
`;

export default CustomSearchBoxDetailed;