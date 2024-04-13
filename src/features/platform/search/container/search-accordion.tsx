import { useState } from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import { stringify } from "querystring";

const SearchAccordion = ({ show = false, searchValues, children }: { show: boolean, searchValues: {
    name: string,
    entities: string,
    citizenship: string,
    nationality: string,
    idValue: string,
    issuer: string,
    idType: string,
    dateOfBirth: string
}, children: any }) => {
    const [open, setOpen] = useState(false);

    const renderSearchInputs = () => {
        const inputs = Object.keys(searchValues).map((key, index) => {
            const value = searchValues[key];
            let label = key;
            if (label === "idType") {
                label = "Document type"
            }
            if (label === 'idValue') {
                label = "Document number"
            }
            if (label === 'dateOfBirth') {
                label = 'Date of Birth'
            }
            if (value) {
                return (
                    <span style={{ textTransform: "capitalize", marginRight: ".75rem" }}>
                        {label} "<strong>{value}</strong>"
                    </span>
                );
            }
            return null;
        });
        return inputs;
    };

    return (
        <StyledWrapper>
            {show ?
                <Grid container item xs={12} md={12} lg={12}>
                    <StyledCard onClick={() => {setOpen(!open)}}>
                        <Grid container gap={0}>
                            <Grid item xs={12} style={{ textAlign: "left" }} pl={3} pt={4} pb={4}>
                            { renderSearchInputs() }
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