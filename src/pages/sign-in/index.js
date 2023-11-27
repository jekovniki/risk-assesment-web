import styled from 'styled-components';
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import useService from "../../hooks/useService";
import { auth } from '../../services';

import SoftBox from '../../components/SoftBox';
import SoftTypography from "../../components/SoftTypography";
import SoftInput from "../../components/SoftInput";
import SoftButton from "../../components/SoftButton";
import CoverLayout from '../../layouts/CoverLayout';

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [inputError, setInputError] = useState({});
    const navigate = useNavigate();

    const { executeService, loading, error, result } = useService(auth.signInWithCredentials);

    const handleSignIn = async (event) => {
        if (!email || email.length === 0) {
            setInputError({ email: true });
            return;
        }
        if (!password || password.length === 0) {
            setInputError({ password: true });
            return;
        }
        event.preventDefault();
        setErrorMessage("");
        try {
            await executeService({ email, password });
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (result) {
            if (result.success === true) {
                navigate(result.options.url);
            } else {
                setErrorMessage(result.message);
            }
        }
        if (error) {
            if (error.message) {
                setErrorMessage(error.message)
            } else {
                setErrorMessage("Error with our service");
            }
        }
    }, [result, error, navigate]);


    return (
        <CoverLayout>
            <MyWrapper>
            <SoftBox display="flex" flexDirection="column" alignItems="center" mb={2}>
                <SoftTypography style={{fontSize: "1rem", fontWeight: "800", color:'rgba(0,0,0,.65'}} mt={2} mb={5} component="p" size="small" fontWeight="normal">
                    Welcome to Risk Assesment platform
                </SoftTypography>
                { errorMessage ? <ErrorMessageBox><p>{errorMessage}</p></ErrorMessageBox> : ""}
                <SoftBox component="form" role="form" onSubmit={handleSignIn}>
                    <SoftBox mmb={2}>
                        <SoftBox mb={1} ml={0.5}>
                            <SoftTypography component="label" variant="caption" fontWeight="bold">
                                Email
                            </SoftTypography>
                        </SoftBox>
                        <CustomInput type="text" placeholder="Email" className={inputError.email ? "has-error" : ""} onChange={(event) => { setEmail(event.target.value)}} />
                    </SoftBox>
                    <SoftBox mmb={2}>
                        <SoftBox mb={1} ml={0.5}>
                            <SoftTypography component="label" variant="caption" fontWeight="bold">
                                Password
                            </SoftTypography>
                        </SoftBox>
                        <CustomInput type="password" placeholder="Password" className={inputError.password ? "has-error" : ""} onChange={(event) => { setPassword(event.target.value)}} />
                    </SoftBox>
                    <SoftBox mt={4} mb={1}>
                        <SoftButton variant="gradient" color="info" fullWidth disabled={loading} component="button" type="submit">
                            { loading ? "Loading..." : "sign in"}
                        </SoftButton>
                    </SoftBox>
                    <SoftBox mt={2}>
                        <p style={{fontSize: ".9rem"}}>Don't have an account yet? <a href="/sign-up">Sign up</a></p>
                    </SoftBox>
                </SoftBox>
            </SoftBox>
            </MyWrapper>
        </CoverLayout>
    );
  }


  const MyWrapper = styled.div`
    display:flex;
    height: 100vh;
    width: 100vw;
    justify-content: space-around;
    align-items: center;

    form {
        width: 400px;
    }

    button {
        background: #007AEB!important;
    }
  `;

  const CustomInput = styled(SoftInput)`
    &.has-error {
        border: 1px solid red;
    }
  `;

  const ErrorMessageBox = styled.div`
    background-color: #d94646;
    padding: 1rem;
    border: 1px solid #ededed;
    border-radius: 5px;
    margin: 2rem auto;
    font-size: 1rem;
    text-align: center;
    width: 100%;
  `
  
  export default SignIn;