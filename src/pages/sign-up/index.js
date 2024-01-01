import styled from 'styled-components';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useService from "../../hooks/useService";
import { auth } from '../../services';

import SoftBox from '../../components/SoftBox';
import SoftTypography from "../../components/SoftTypography";
import SoftInput from "../../components/SoftInput";
import SoftButton from "../../components/SoftButton";
import InternalDatePicker from '../../components/InternalDatePicker';
import CoverLayout from '../../layouts/CoverLayout';

import brand from "../../assets/images/RISK-LOGO.svg";
import InternalSelect from '../../components/InternalSelect';

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [gender, setGender] = useState("MALE");
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [infoMessage, setInfoMessage] = useState("");
    const [inputError, setInputError] = useState({});
    const navigate = useNavigate();

    const { executeService, loading, error, result } = useService(auth.signUp);

    const handleSignIn = async (event) => {
        if (!email || email.length === 0) {
            setInputError({ email: true });
            return;
        }
        if (!password || password.length === 0) {
            setInputError({ password: true });
            return;
        }
        if (password !== repeatPassword) {
            setInputError({ repeatPassword: true, password: true });
            return;
        }
        if (!firstName || firstName.length === 0) {
            setInputError({ firstName: true });
            return;
        }
        if (!lastName || lastName.length === 0) {
            setInputError({ lastName: true });
            return;
        }
        event.preventDefault();
        setErrorMessage("");
        try {
            await executeService({ email, password, repeatPassword, gender, dateOfBirth, firstName, lastName });
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (result) {
            if (result.success === true) {
                setInfoMessage("Successfully registered!")
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
                    <SoftBox component="img" src={brand} alt="AUG.Global" width="250px" style={{
                        marginLeft: "auto",
                        marginRight: "auto"
                    }} />
                    <SoftTypography style={{ fontSize: "1rem", fontWeight: "800", color: 'rgba(0,0,0,.65' }} mt={2} mb={5} component="p" size="small" fontWeight="normal">
                        Fill in the form in order to register
                    </SoftTypography>
                    {infoMessage ? <InfoMessageBox><p>{infoMessage}</p></InfoMessageBox> : ""}
                    {errorMessage ? <ErrorMessageBox><p>{errorMessage}</p></ErrorMessageBox> : ""}
                    <SoftBox component="form" role="form" onSubmit={handleSignIn}>
                        <SoftBox mb={0.5}>
                            <SoftBox mb={1} ml={0.5}>
                                <SoftTypography component="label" variant="caption" fontWeight="bold">
                                    Email
                                </SoftTypography>
                            </SoftBox>
                            <CustomInput type="text" placeholder="Email" className={inputError.email ? "has-error" : ""} onChange={(event) => { setEmail(event.target.value) }} />
                        </SoftBox>
                        <SoftBox mb={0.5}>
                            <SoftBox mb={1} ml={0.5}>
                                <SoftTypography component="label" variant="caption" fontWeight="bold">
                                    Password
                                </SoftTypography>
                            </SoftBox>
                            <CustomInput type="password" placeholder="Password" className={inputError.password ? "has-error" : ""} onChange={(event) => { setPassword(event.target.value) }} />
                        </SoftBox>
                        <SoftBox mb={0.5}>
                            <SoftBox mb={1} ml={0.5}>
                                <SoftTypography component="label" variant="caption" fontWeight="bold">
                                    Repeat password
                                </SoftTypography>
                            </SoftBox>
                            <CustomInput type="password" placeholder="Password" className={inputError.repeatPassword ? "has-error" : ""} onChange={(event) => { setRepeatPassword(event.target.value) }} />
                        </SoftBox>
                        <SoftBox mb={0.5}>
                            <InternalDatePicker
                                label="Date of birth"
                                value={dateOfBirth}
                                popperPlacement="top"
                                onChange={(event) => { setDateOfBirth(event) }}
                            />
                        </SoftBox>
                        <SoftBox mb={0.5}>
                            <SoftTypography component="label" variant="caption" fontWeight="bold">
                                Gender
                            </SoftTypography>
                            <InternalSelect lable="Gender" value={gender} onChange={(event) => {
                                setGender(event.target.value)
                            }}
                                options={[{ value: "MALE", label: "Male" }, { value: "FEMALE", label: "Female" }, { value: "OTHER", label: "Other" }]}
                            />
                        </SoftBox>
                        <SoftBox mb={0.5}>
                            <SoftBox mb={1} ml={0.5}>
                                <SoftTypography component="label" variant="caption" fontWeight="bold">
                                    First name
                                </SoftTypography>
                            </SoftBox>
                            <CustomInput type="text" placeholder="First name" className={inputError.firstName ? "has-error" : ""} onChange={(event) => { setFirstName(event.target.value) }} />
                        </SoftBox>
                        <SoftBox mb={0.5}>
                            <SoftBox mb={1} ml={0.5}>
                                <SoftTypography component="label" variant="caption" fontWeight="bold">
                                    Last name
                                </SoftTypography>
                            </SoftBox>
                            <CustomInput type="text" placeholder="Last name" className={inputError.lastName ? "has-error" : ""} onChange={(event) => { setLastName(event.target.value) }} />
                        </SoftBox>
                        <SoftBox mt={4} mb={1}>
                            <SoftButton variant="gradient" color="info" fullWidth disabled={loading} component="button" type="submit">
                                {loading ? "Loading..." : "Register"}
                            </SoftButton>
                        </SoftBox>
                        <SoftBox mt={2}>
                            <p style={{ fontSize: ".9rem" }}>Already have an account? <a href="/sign-in">Sign in</a></p>
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

const InfoMessageBox = styled.div`
background-color: #77DD77;
padding: 1rem;
border: 1px solid #ededed;
border-radius: 5px;
margin: 2rem auto;
font-size: 1rem;
text-align: center;
width: 100%;
`

export default SignUp;