import styled from "@emotion/styled";

import { Button, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import LoginIcon from '@mui/icons-material/Login';

import { signInWithGoogle, useLoginMutation } from "../../../services/auth";

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
    login: "Login",
    google: "Sign in with Google"
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
                    <div style={{ textAlign: "center", fontSize: "14px", marginTop: "2rem" }}>
                        or
                    </div>
                    <Button 
                        variant="outlined" 
                        fullWidth 
                        href={signInWithGoogle}
                        style={{ paddingTop: ".75rem",  paddingBottom: ".75rem" }}
                    >
                        <svg width="22px" height="22px" style={{marginRight: ".75rem"}} viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/></svg>
                        {content.google}
                    </Button>
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

    a.MuiButton-root:hover {
        color: #1976d2;
    }
`;

const StyledWrapper = styled.div`
    margin-bottom:.75rem!important;
`;

export default Login;