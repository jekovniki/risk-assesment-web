import { useState } from "react";
import { useMutation } from "react-query";
import { encode } from "base-64";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import LoginIcon from '@mui/icons-material/Login';

import { ICredentials, signIn, useLoginMutation } from "../../../services/auth";

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
    const { loading, formError, errorMessage, submitData } = useLoginMutation();

    const signIn = (event: any) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        submitData({ email, password})
    }

    return (
        <DefaultContainer>
            <AuthForm>
                <Text>{content.text}</Text>
                <StyledForm onSubmit={signIn}>
                    {errorMessage ? <div style={{color: "red"}}>
                        {errorMessage}
                    </div> : ""}
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
                    <StyledWrapper>
                        {content.register}
                    </StyledWrapper>
                    <LoadingButton
                        endIcon={<LoginIcon />}
                        loading={loading}
                        fullWidth
                        type="submit"
                        loadingPosition="end"
                        variant="contained"
                        style={{ paddingTop: '.75rem', paddingBottom: '.75rem' }}
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