import { useState } from "react";

import styled from "@emotion/styled";

import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import LoginIcon from '@mui/icons-material/Login';

import DefaultContainer from "./containers/default";
import AuthForm from "./containers/form";
import { Text } from "./components/text";

const content = {
    text: "Welcome to our platform",
    email: {
        label: "Email",
        defaultValue: "user@email.com"
    },
    password: {
        label: "Password",
        defaultValue: "******"
    },
    register: <>You don't have an account yet? Go and <a href="/register">register</a>!</>,
    login: "Login"
}

const Login = () => {
    const [loading, setLoading] = useState(false);

    return (
        <DefaultContainer>
            <AuthForm>
                <Text>{ content.text }</Text>
                <StyledForm>
                    <TextField
                        label={content.email.label}
                        id="outlined-size-small"
                        placeholder={content.email.defaultValue}
                        size="medium"
                    />
                    <TextField
                        label={content.password.label}
                        id="outlined-size-medium"
                        placeholder={content.password.defaultValue}
                        size="medium"
                        type="password"
                    />
                    <StyledWrapper>
                        {content.register}
                    </StyledWrapper>
                    <LoadingButton
                        onClick={() => { setLoading(!loading) }}
                        endIcon={<LoginIcon />}
                        loading={loading}
                        fullWidth
                        loadingPosition="end"
                        variant="contained"
                        style={{paddingTop: '.75rem', paddingBottom: '.75rem'}}
                    >
                        {content.login}
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
        margin-bottom: 2rem;
    }
`;

const StyledWrapper = styled.div`
    margin-bottom:.75rem!important;
`;

export default Login;