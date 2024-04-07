import styled from '@emotion/styled';
import { useState, useRef } from 'react';
import { Box, Grid } from "@mui/material";
import { TextField, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { LoadingButton } from '@mui/lab';
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ENTITIES_OPTIONS } from '../../common/data/search-options';
import { COUNTRIES } from '../../../../utils/countries';

function CustomSearchBoxDetailed({ onSubmit }: { onSubmit: any }) {
    const [entities, setEntities] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState({} as any);
    const inputRef = useRef<HTMLInputElement>(null);
    const [citizenship, setCitizenship] = useState("");
    const [nationality, setNationality] = useState("");
    function setQuery(newQuery: string) {
        setInputValue(newQuery);
    }
    const handleClick = () => {
        let search = inputValue;
        search += entities ? " " + entities : "";
        search += citizenship ? " " + citizenship : "";
        search += nationality ? " " + nationality : "";

        // Good f*cking luck reading this
        search += JSON.stringify(dateOfBirth) !== '{}' ? 
        `${dateOfBirth.$y}-${dateOfBirth.$M > 9 ? dateOfBirth.$M : "0" + dateOfBirth.$M}-${dateOfBirth.$D > 9 ? dateOfBirth.$D : "0" + dateOfBirth.$D}` : "";

        onSubmit({ search });
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
                <Grid item xs={12} lg={5.925}>
                    <FormControl fullWidth>
                        <InputLabel id="entity-label" key="entity-label">Entity type</InputLabel>
                        <Select
                            labelId="entity-label"
                            key="entity"
                            value={entities}
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
                <Grid item xs={12} lg={5.875}>
                    <FormControl fullWidth>
                        <InputLabel id="citizenship-label" key="citizenship-label">Select Citizenship</InputLabel>
                        <Select
                            labelId="citizenship-label"
                            key="citizenship"
                            value={citizenship}
                            id="citizenship"
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
            <Grid container gap={2} marginTop={2}>
                <Grid item xs={12} lg={5.875}>
                    <div style={{ width: "100%", display: "flex", flexDirection: "column-reverse" }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DatePicker label="Date of birth | MM/DD/YYYY" name="dateOfBirth" onChange={(event: any) => { setDateOfBirth(event)}}/>
                        </LocalizationProvider>
                    </div>
                </Grid>
                <Grid item xs={12} lg={5.925}>
                    <FormControl fullWidth>
                        <InputLabel id="nationality-label" key="nationality-label">Select Nationality</InputLabel>
                        <Select
                            labelId="nationality-label"
                            key="nationality"
                            value={nationality}
                            id="nationality"
                            name="nationality"
                            label="Select Nationality"
                            onChange={(event) => { setNationality(event.target.value) }}
                        >
                            {COUNTRIES.map((option) =>
                                <MenuItem key={option.name} value={option.code}>{option.name}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <LoadingButton
                fullWidth
                type="submit"
                variant="contained"
                style={{ paddingTop: '.75rem', paddingBottom: '.75rem', marginTop: '1rem' }}
                onClick={handleClick}
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