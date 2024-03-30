import styled from "@emotion/styled"
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";
import { TextField, InputLabel, MenuItem, FormControl, Select, Input } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useResolveCase } from "../api/use-resolve-case";
import { Loader } from "../../common/components/loader";

const statusContent = {
    label: "Status",
    options: [{
        value: "",
        label: "Select status"
    }, {
        value: "Positive",
        label: "Positive",
    }, {
        value: 'Negative',
        label: 'Negative'
    }]
}

const riskContent = {
    label: "Risk Level",
    options: [{
        value: "",
        label: "Select risk"
    }, {
        value: "High",
        label: "High",
    }, {
        value: 'Medium',
        label: 'Medium'
    }, {
        value: 'Low',
        label: 'Low'
    }]
}

export const ResolveCaseForm = () => {
    const [status, setStatus] = useState('');
    const [riskLevel, setRiskLevel] = useState('');
    const resolveCase = useResolveCase();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const reason = formData.get('reason') as string;
        const additionalComment = formData.get('additional-information') as string;
        console.log('status ', status );
        console.log('riskLevel ', riskLevel);
        if (status !== 'Positive' && status !== 'Negative') {
            return;
        }
        if (riskLevel !== 'High' && riskLevel !== 'Medium' && riskLevel !== 'Low') {
            return;
        }

        resolveCase.mutate({
            searchId: "saddassdsad2323423423",
            status,
            riskLevel,
            reason,
            additionalComment,
        }, {
            onSuccess: (data) => {
                console.log(data);
            },
            onError: (data) => {
                console.error(data);
            }
        })
    }

    return (
        <StyledWrapper>
            {
                resolveCase.isLoading ?
                    <Loader /> :
                    <StyledForm onSubmit={handleSubmit}>
                        <FormControl required sx={{ m: 1, minWidth: 120 }} style={{ marginBottom: '1rem' }}>
                            <InputLabel id="status-label">{statusContent.label}</InputLabel>
                            <Select
                                labelId="status-label"
                                id="status"
                                name="status"
                                value={status}
                                label="Status"
                                disabled={resolveCase.isLoading}
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
                                disabled={resolveCase.isLoading}
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
                            disabled={resolveCase.isLoading}
                            className="textfield"
                        />
                        <FormControl sx={{ m: 1, minWidth: 120 }} style={{ marginBottom: '1rem' }}>
                            <Input id="additional-information" name="additional-information" aria-label="Demo input" className="textarea" multiline placeholder="Additional Comments…" />
                        </FormControl>
                        <LoadingButton
                            endIcon={<CheckIcon />}
                            loading={resolveCase.isLoading}
                            fullWidth
                            type="submit"
                            loadingPosition="end"
                            variant="contained"
                            style={{ paddingTop: '.75rem', paddingBottom: '.75rem', marginLeft: '.5rem', width: '96%' }}
                        >
                            Resolve Case
                        </LoadingButton>
                    </StyledForm>
            }
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