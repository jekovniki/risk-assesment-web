import { useState } from "react";

import styled from "@emotion/styled";

import { TextField, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import DefaultContainer from "./containers/default";
import { useRegistrationMutation } from "../../../services/auth";
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
    plan: {
        label: "Plan",
        options:[{
            key: 'free',
            value: "Free",
            label: "Free",
        }, {
            key: 'standard',
            value: 'Standard',
            label: 'Standard'
        }, {
            key: 'pro',
            value: 'Pro',
            label: 'Pro'
        }],
        required: "Required",
        description: [{
            key: 'Free',
            value: 'Free plan is suitable for people that want to try the system. You have limited access to the features (no company) that we offer and you have the possibility to do 3 reports per day.'
        }, {
            key: 'Standard',
            value: 'Standard plan is suitable for small to medium sized companies. You have full access to the features that we offer and you have the possibility to do 20 reports per day.'
        }, {
            key: 'Pro',
            value: 'Pro plan is suitable for customers who need to do multiple complience checks per day - banks, financial institutions and etc. You have full access to the features that we offer and you have the possibility to do unlimited reports per day.',
        }]
    },
    register: "Register",
    login: <>Fill in the form in order to register. Already have an account? <a href="/login">Sign in</a></>
}


const Register = () => {
    const [gender, setGender] = useState("");
    const [plan, setPlan] = useState(content.plan.options[0].value);
    const { loading, formError, errorMessage, submitData } = useRegistrationMutation();

    const signUp = (event: any) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email') as string;
        const firstName = formData.get('first-name') as string;
        const lastName = formData.get('last-name') as string;
        const dateOfBirth = formData.get('dateOfBirth') as string;
        const password = formData.get('password') as string;
        const repeatPassword = formData.get('repeat-password') as string;
        const gender = formData.get('gender') as string;
        const plan = formData.get('plan') as string;

        submitData({ email, password, repeatPassword, gender, plan, firstName, lastName, dateOfBirth});
    }

    return (
        <DefaultContainer>
            <AuthForm>
                <Text>{content.login}</Text>
                <StyledForm onSubmit={signUp}>
                    <TextField
                        label={content.email.label}
                        id="email"
                        name="email"
                        placeholder={content.email.defaultValue}
                        size="medium"
                        disabled={loading}
                        error={formError.email ? true : false}
                        helperText={formError.email}
                    />
                    <TextField
                        label={content.firstName.label}
                        id="first-name"
                        name="first-name"
                        placeholder={content.firstName.defaultValue}
                        size="medium"
                        disabled={loading}
                        error={formError.firstName ? true : false}
                        helperText={formError.firstName}
                    />
                    <TextField
                        label={content.lastName.label}
                        id="last-name"
                        name="last-name"
                        placeholder={content.lastName.defaultValue}
                        size="medium"
                        disabled={loading}
                        error={formError.lastName ? true : false}
                        helperText={formError.lastName}
                    />
                    <FormControl required sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="gender-label">{ content.gender.label }</InputLabel>
                        <Select
                            labelId="gender-label"
                            id="gender"
                            name="gender"
                            value={gender}
                            label="Gender *"
                            disabled={loading}
                            error={formError.gender ? true : false}
                            onChange={(event) => setGender(event.target.value)}
                        >
                            {content.gender.options.map((option) => 
                                <MenuItem key={option.key} value={option.value}>{option.label}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker label="Date of birth | MM/DD/YYYY" name="dateOfBirth" />
                    </LocalizationProvider>
                    <TextField
                        label={content.password.label}
                        id="password"
                        name="password"
                        placeholder={content.password.defaultValue}
                        size="medium"
                        type="password"
                        disabled={loading}
                        error={formError.password ? true : false}
                        helperText={formError.password}
                    />
                    <TextField
                        label={content.repeatPassword.label}
                        id="repeat-password"
                        name="repeat-password"
                        placeholder={content.repeatPassword.defaultValue}
                        size="medium"
                        type="password"
                        disabled={loading}
                        error={formError.repeatPassword ? true : false}
                        helperText={formError.repeatPassword}
                    />
                    <FormControl required sx={{ m: 1, minWidth: 120 }} style={{marginBottom: '1rem'}}>
                        <InputLabel id="plan-label">{ content.plan.label }</InputLabel>
                        <Select
                            labelId="plan-label"
                            id="plan"
                            name="plan"
                            value={plan}
                            label="Plan *"
                            disabled={loading}
                            error={formError.plan ? true : false}
                            onChange={(event) => setPlan(event.target.value)}
                        >
                            {content.plan.options.map((option) => 
                                <MenuItem key={option.key} value={option.value}>{option.label}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <StyledPlanBox>
                        { content.plan.description.find(description => description.key === plan ? description.value : null)?.value }
                    </StyledPlanBox>
                    <LoadingButton
                        endIcon={<AppRegistrationIcon />}
                        loading={loading}
                        fullWidth
                        type="submit"
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

const StyledPlanBox = styled.div`
    margin-top:0;
    color: #1a1a1a;
    text-align: left;
`;

export default Register;