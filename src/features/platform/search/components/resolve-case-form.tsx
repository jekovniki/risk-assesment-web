import styled from "@emotion/styled"
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";
import { TextField, InputLabel, MenuItem, FormControl, Select, Input } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const statusContent = {
    label: "Status",
    options: [{
        value: "",
        label: "Select status"
    }, {
        value: "positive",
        label: "Positive",
    }, {
        value: 'negative',
        label: 'Negative'
    }]
}

const riskContent = {
    label: "Risk Level",
    options: [{
        value: "",
        label: "Select risk"
    }, {
        value: "high",
        label: "High",
    }, {
        value: 'medium',
        label: 'Medium'
    }, {
        value: 'low',
        label: 'Low'
    }]
}

export const ResolveCaseForm = () => {
    const [status, setStatus] = useState('');
    const [riskLevel, setRiskLevel] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setLoading(true);
    }

    return (
        <StyledWrapper>
            <StyledForm onSubmit={handleSubmit}>
                <FormControl required sx={{ m: 1, minWidth: 120 }} style={{ marginBottom: '1rem' }}>
                    <InputLabel id="status-label">{statusContent.label}</InputLabel>
                    <Select
                        labelId="status-label"
                        id="status"
                        name="status"
                        value={status}
                        label="Status"
                        disabled={loading}
                        onChange={(event: any) => setStatus(event.target.value)}
                    >
                        {statusContent.options.map((option) =>
                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                        )}
                    </Select>
                </FormControl>
                <FormControl required sx={{ m: 1, minWidth: 120 }} style={{ marginBottom: '1rem' }}>
                    <InputLabel id="risk-label">{riskContent.label}</InputLabel>
                    <Select
                        labelId="risk-label"
                        id="risk"
                        name="risk"
                        value={riskLevel}
                        label="Risk Level"
                        disabled={loading}
                        onChange={(event: any) => setRiskLevel(event.target.value)}
                    >
                        {riskContent.options.map((option) =>
                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                        )}
                    </Select>
                </FormControl>
                <TextField
                    label="Reason"
                    id="reason"
                    name="reason"
                    placeholder="Please enter reason"
                    size="medium"
                    disabled={loading}
                    className="textfield"
                />
                <FormControl sx={{ m: 1, minWidth: 120 }} style={{ marginBottom: '1rem' }}>
                    <Input aria-label="Demo input" className="textarea" multiline placeholder="Additional Comments…" />
                </FormControl>
                <LoadingButton
                    endIcon={<CheckIcon />}
                    loading={loading}
                    fullWidth
                    type="submit"
                    loadingPosition="end"
                    variant="contained"
                    style={{ paddingTop: '.75rem', paddingBottom: '.75rem', marginLeft: '.5rem', width: '96%'}}
                >
                    Resolve Case
                </LoadingButton>
            </StyledForm>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`

.textfield {
    margin-left: .5rem;
    margin-right: .5rem;
}

.textarea {
    margin-left: .75rem;
    margin-right: .75rem;
    margin-top: .75rem;
}
`;

const StyledForm = styled.form`
    box-sizing: border-box;
    display:flex;
    flex-flow: column;
    width: 400px;
    padding: 1rem .5rem;
`;