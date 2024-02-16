import { useState } from "react";

import styled from "@emotion/styled";

import { TextField, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import DefaultContainer from "./containers/default";
import AuthForm from "./containers/form";
import { Text } from "./components/text";

const content = {
    text: "Welcome to our platform",
    firstName: {
        label: "Given name",
        defaultValue: "John"
    },
    lastName: {
        label: "Family name",
        defaultValue: "Doe"
    },
    email: {
        label: "Email",
        defaultValue: "user@email.com"
    },
    password: {
        label: "Password",
        defaultValue: "******"
    },
    repeatPassword: {
        label: "Repeat password",
        defaultValue: "******"
    },
    gender: {
        label: "Gender",
        options:[{
            key: "male",
            value: "MALE",
            label: "Male"
        }, {
            key: "female",
            value: "FEMALE",
            label: "Female"
        }, {
            key: "other",
            value: "OTHER",
            label: "Other"
        }],
        required: "Required"
    },
    register: "Register",
    login: <>Fill in the form in order to register. Already have an account? <a href="/login">Sign in</a></>
}


const Register = () => {
    const [loading, setLoading] = useState(false);
    const [gender, setGender] = useState('');

    return (
        <DefaultContainer>
            <AuthForm>
                <Text>{content.login}</Text>
                <StyledForm>
                    <TextField
                        label={content.email.label}
                        id="email"
                        placeholder={content.email.defaultValue}
                        size="medium"
                    />
                    <TextField
                        label={content.firstName.label}
                        id="first-name"
                        placeholder={content.firstName.defaultValue}
                        size="medium"
                    />
                    <TextField
                        label={content.lastName.label}
                        id="last-name"
                        placeholder={content.lastName.defaultValue}
                        size="medium"
                    />
                    <FormControl required sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-required-label">{ content.gender.label }</InputLabel>
                        <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            value={gender}
                            label="Gender *"
                            onChange={(event) => setGender(event.target.value)}
                        >
                            {content.gender.options.map((option) => 
                                <MenuItem key={option.key} value={option.value}>{option.label}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker />
                    </LocalizationProvider>
                    <TextField
                        label={content.password.label}
                        id="password"
                        placeholder={content.password.defaultValue}
                        size="medium"
                        type="password"
                    />
                    <TextField
                        label={content.repeatPassword.label}
                        id="repeat-password"
                        placeholder={content.repeatPassword.defaultValue}
                        size="medium"
                        type="password"
                    />
                    <LoadingButton
                        onClick={() => { setLoading(!loading) }}
                        endIcon={<AppRegistrationIcon />}
                        loading={loading}
                        fullWidth
                        loadingPosition="end"
                        variant="contained"
                        style={{ paddingTop: '.75rem', paddingBottom: '.75rem' }}
                    >
                        {content.register}
                    </LoadingButton>
                </StyledForm>
            </AuthForm>
        </DefaultContainer>
    )
}

const StyledForm = styled.form`
    box-sizing: border-box;
    width: 100%;
    margin-top: 1.5rem;
    > div {
        width: 100%;
        margin-left:0;
        margin-right:0;
        margin-top:0;
        margin-bottom: 2rem;
    }
`;

export default Register;