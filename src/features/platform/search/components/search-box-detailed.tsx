import styled from '@emotion/styled';
import { useState, useRef } from 'react';
import { Grid } from "@mui/material";
import { TextField, InputLabel, MenuItem, FormControl, Select, FormControlLabel, FormGroup, Checkbox } from "@mui/material";
import { LoadingButton } from '@mui/lab';
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ENTITIES_OPTIONS, ID_TYPE_OPTIONS } from '../../common/data/search-options';
import { COUNTRIES } from '../../../../utils/countries';

function CustomSearchBoxDetailed({ onSubmit }: { onSubmit: any }) {
    const [errorMessage, setErrorMessage] = useState("");
    const [entities, setEntities] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [idValue, setIdValue] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState({} as any);
    const inputRef = useRef<HTMLInputElement>(null);
    const [citizenship, setCitizenship] = useState("");
    const [nationality, setNationality] = useState("");
    const [issuer, setIssuer] = useState("");
    const [idType, setIdType] = useState("");

    function setQuery(newQuery: string) {
        setInputValue(newQuery);
    }
    const handleClick = () => {
        let search = inputValue;
        search += entities ? " " + entities : "";
        search += citizenship ? " " + citizenship : "";
        search += nationality ? " " + nationality : "";
        search += idValue ? " " + idValue : "";
        search += issuer ? " " + issuer : "";
        search += idType ? " " + idType : "";

        // Good f*cking luck reading this
        search += JSON.stringify(dateOfBirth) !== '{}' ?
            `${dateOfBirth.$y}-${dateOfBirth.$M > 9 ? dateOfBirth.$M : "0" + dateOfBirth.$M}-${dateOfBirth.$D > 9 ? dateOfBirth.$D : "0" + dateOfBirth.$D}` : "";
        if (!search) {
            setErrorMessage("At least one of the fields should be filled in order to search");
        }
        onSubmit({ 
            search,
            name: inputValue,
            entities: entities,
            citizenship: citizenship,
            nationality: nationality,
            idValue: idValue,
            issuer: issuer,
            idType: idType,
            dateOfBirth: JSON.stringify(dateOfBirth) !== '{}' ? `${dateOfBirth.$y}-${dateOfBirth.$M > 9 ? dateOfBirth.$M : "0" + dateOfBirth.$M}-${dateOfBirth.$D > 9 ? dateOfBirth.$D : "0" + dateOfBirth.$D}` : "",
            ongoingScreening: false
         });
    }

    return (
        <>
            <StyledWrapper>
                <TextField
                    label={<>Name (<span style={{ color: "red" }}>Required</span>)</>}
                    ref={inputRef}
                    id="search"
                    key="search"
                    name="search"
                    // variant="filled"
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
                    <Grid item xs={12} lg={5.8}>
                        <FormControl fullWidth>
                            <InputLabel id="entity-label" key="entity-label">Select Entity type</InputLabel>
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
                    <Grid item xs={12} lg={5.8}>
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
                    <Grid item xs={12} lg={5.8}>
                        <div style={{ width: "100%", display: "flex", flexDirection: "column-reverse" }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DatePicker label="Date of birth | MM/DD/YYYY" name="dateOfBirth" onChange={(event: any) => { setDateOfBirth(event) }} />
                            </LocalizationProvider>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={5.8}>
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
            </StyledWrapper>
            <Grid height="40px" style={{
                backgroundColor: "rgba(0, 0, 0, 0.03)",
                textAlign: "left",
                paddingTop: "8px",
                paddingLeft: "1.8rem"
            }}>Identification Number(s)</Grid>
            <StyledWrapper>
                <Grid container gap={2}>
                    <Grid item xs={12} lg={3.8}>
                        <FormControl fullWidth>
                            <InputLabel id="issue-label" key="issuer-label">Select Issuer/Country</InputLabel>
                            <Select
                                labelId="issuer-label"
                                key="issuer"
                                value={issuer}
                                id="issuer"
                                name="issuer"
                                label="Select Issuer/Country"
                                onChange={(event) => { setIssuer(event.target.value) }}
                            >
                                {COUNTRIES.map((option) =>
                                    <MenuItem key={option.name} value={option.code}>{option.name}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} lg={3.8}>
                        <FormControl fullWidth>
                            <InputLabel id="id-type-label" key="id-type-label">Select ID Type</InputLabel>
                            <Select
                                labelId="id-type-label"
                                key="id-type"
                                value={idType}
                                id="id-type"
                                name="id-type"
                                label="Select ID Type"
                                onChange={(event) => { setIdType(event.target.value) }}
                            >
                                {ID_TYPE_OPTIONS.map((option) =>
                                    <MenuItem key={option.label} value={option.value}>{option.label}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} lg={3.8}>
                        <TextField
                            label={<>ID Number</>}
                            ref={inputRef}
                            id="id-number"
                            key="id-number"
                            name="id-number"
                            // variant="filled"
                            placeholder="Enter ID Number"
                            size="medium"
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            fullWidth
                            type="search"
                            value={idValue}
                            style={{ marginBottom: "1rem" }}
                            onChange={(event) => { setIdValue(event.currentTarget.value) }}
                        />
                    </Grid>
                </Grid>
            </StyledWrapper>
            <Grid height="40px" style={{
                backgroundColor: "rgba(0, 0, 0, 0.03)",
                textAlign: "left",
                paddingTop: "8px",
                paddingLeft: "1.8rem"
            }}>Screening Settings</Grid>
            <StyledWrapper style={{ paddingBottom: "12px" }}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Enable Ongoing Screening" />
                </FormGroup>
            </StyledWrapper>
            <hr style={{
                borderColor: "rgba(0, 0, 0, 0.4)"
            }}/>
            {errorMessage ? <div style={{ color: "red" }}>{errorMessage}</div> : "" }
            <StyledWrapper style={{
                textAlign: "right",
                paddingTop: "12px"
            }}>
                <LoadingButton
                    type="submit"
                    variant="contained"
                    style={{
                        paddingTop: '.75rem',
                        paddingBottom: '.75rem',
                        textTransform: "capitalize",
                        fontWeight: "600"
                    }}
                    onClick={handleClick}
                >
                    Perform Search
                </LoadingButton>
            </StyledWrapper>
        </>
    );
}

const StyledWrapper = styled.div`
    padding: 1.25rem 1.8rem;
        > div {
            width: 100%;
        }
`;

export default CustomSearchBoxDetailed;