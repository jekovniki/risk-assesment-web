import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import { COUNTRY_FLAGS } from "../../../../utils/countries";

export const SearchResultCheckbox = ({ data }: { data: Record<string, any> }) => {
    const [checked, setChecked] = useState(false);
    const name = data.caption;
    const dateOfBirth = data.properties.birthDate?.[0] || '';
    const placeOfBirth = data.properties.birthPlace?.[0] || '';
    const gender = data.properties.gender?.[0] || '';
    const citizenship = data.properties.nationality || [];
    const country = data.properties.country || [];
    const navigate = useNavigate();

    const handleGoToPepPage = () => {
        navigate('/search-result', { state: { data } });
    }

    return (
        <StyledBG>
            <StyledTopLine>
                <LeftColumn>
                    <FormGroup>
                        <FormControlLabel onClick={() => { setChecked(!checked) }} control={<Checkbox />} checked={checked} label={<span onClick={handleGoToPepPage}>{name}</span>} />
                    </FormGroup>
                </LeftColumn>
                <RightColumn>
                    <StyledKeyDataOption>Open sanctions</StyledKeyDataOption>
                </RightColumn>
            </StyledTopLine>
            <StyledBottomLine>
                <Grid container pt={2}>
                    <Grid item xs={6} md={4} lg={2} p={5} pt={0}>
                        <StyledLabel>
                            Date of Birth
                        </StyledLabel>
                        <StyledValue>
                            {dateOfBirth}
                        </StyledValue>
                    </Grid>
                    <Grid item xs={6} md={4} lg={2} p={5} pt={0}>
                        <StyledLabel>
                            Gender
                        </StyledLabel>
                        <StyledValue>
                            {gender}
                        </StyledValue>
                    </Grid>
                    <Grid item xs={6} md={4} lg={2} p={5} pt={0}>
                        <StyledLabel>
                            Country/Location
                        </StyledLabel>
                        <StyledValue>
                            { country?.map((code: string) => {
                                const country = COUNTRY_FLAGS.find(flag => flag.code?.toLowerCase() === code.toLowerCase());

                                return country ? country.country + " " : country + " ";
                            })}
                        </StyledValue>
                    </Grid>
                    <Grid item xs={6} md={4} lg={2} p={5} pt={0}>
                        <StyledLabel>
                            Place of Birth
                        </StyledLabel>
                        <StyledValue>
                            {placeOfBirth}
                        </StyledValue>
                    </Grid>
                    <Grid item xs={6} md={4} lg={3} p={5} pt={0}>
                        <StyledLabel>
                            Citizenship
                        </StyledLabel>
                        <StyledValue style={{ display: "flex" }}>
                            {citizenship?.map((code: string) => {
                                const country = COUNTRY_FLAGS.find(flag => flag.code?.toLowerCase() === code.toLowerCase());

                                return country ? country.country + " " : null;
                            })}
                        </StyledValue>
                    </Grid>
                </Grid>
            </StyledBottomLine>
        </StyledBG>
    );
}

const StyledBG = styled.div`
    background-color: rgba(246, 249, 255, 1);
    transition: .4s;
    margin-bottom: 1.5rem;
    &:hover {
        background-color: rgba(246, 249, 255, 0.3);
        transition: .4s;
    }
`;

const StyledTopLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LeftColumn = styled.div`
    padding: 1rem 1.5rem;
    label {
        font-size: 1.25rem;
        line-height: 1.5rem;
        font-weight: 600;
        color: rgba(14, 26, 50, 1);
    }
`;

const RightColumn = styled.div`
    padding: 1rem 1.5rem;
`;

const StyledKeyDataOption = styled.div`
    color: rgba(222, 32, 32, 1);
    font-size: 12px;
    line-height: 14.4px;
    font-weight: 600;
    padding: .25rem .35rem;
    background-color: rgba(222, 32, 32, .3);
    margin-left: .5rem;
    border-radius: 3px;
`;

const StyledBottomLine = styled.div``;

const StyledLabel = styled.div`
    color: rgba(68, 83, 114, 1);
    font-weight: 300;
    font-size: 13px;
    line-height: 15.6px;
    text-align:left;
`;

const StyledValue = styled.div`
    color: rgba(68, 83, 114, 1);
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 500;
    text-align:left;
`;