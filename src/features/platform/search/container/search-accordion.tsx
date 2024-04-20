import { useState } from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import { searchInputs } from "../components/search-inputs";

export interface ISearchValues {
    name: string,
    entities: string,
    citizenship: string,
    nationality: string,
    idValue: string,
    issuer: string,
    idType: string,
    dateOfBirth: string
}

const SearchAccordion = ({ show = false, searchValues, children }: { show: boolean, searchValues: ISearchValues, children: any }) => {
    const [open, setOpen] = useState(false);

    return (
        <StyledWrapper>
            {show ?
                <Grid container item xs={12} md={12} lg={12}>
                    <StyledCard onClick={() => {setOpen(!open)}}>
                        <Grid container gap={0}>
                            <Grid item xs={12} style={{ textAlign: "left" }} pl={3} pt={4} pb={4}>
                            { searchInputs(searchValues) }
                            </Grid>
                        </Grid>
                    </StyledCard>
                </Grid> : ""}
                { !show || show && open ? <Grid width="100%" item xs={12}>{children}</Grid> : "" }
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    height: auto;
    width: 100%;
`;

const StyledCard = styled.div`
    margin: .5rem;
    background-color: #fff;
    width: 100%;
    border-radius: 3px;
    transition: .4s;

    &:hover {
        box-shadow: 0px 0px 50px 0px rgba(71, 100, 157, 0.05);
        transition: .4s;
        cursor: pointer;
    }
`;

export default SearchAccordion;